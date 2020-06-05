import React, {useState, useEffect, Fragment} from 'react';
import arrayMove from 'array-move';
import SortableContainer from '../components/SortableContainer.js'
import Section from './Section.js'
import {APIROOT, HEADERS} from '../../constraints/index.js'
import {useHistory} from 'react-router-dom'

const SlideForm = ({serviceId}) => {

    const [sections, setSections] = useState() //dummy state to start
    const [serviceDate, setServiceDate] = useState()

    const history = useHistory()

    const onSortEnd = ({oldIndex, newIndex}) => { // do I need to take a picture of prev state before doing this?
        setSections(arrayMove(sections, oldIndex, newIndex))
    }

    const populateSections = () => {
        return sections.map((section, index) => {
            return <Section key={`section-${section.id}`} id={section.id} index={index} title={section.title} oldSlides={section.slides} onSectionTitleChange={onSectionTitleChange} />
        })
    }

    const onSectionTitleChange = (e, key) => {
        setSections(sections.map(section => {
            if (section.id === key) {
                section.title = e.target.value
            }
            return section
        }))
    }

    // params for post/put request

    const slideAttributes = (slides) => {
        return slides.map(slide => {
            return {title: slide.title, content: slide.content}
        })
    }

    const sectionAttributes = () => {
        return sections.map(section => {
            return {title: section.title, slide_attributes: slideAttributes(section.slides)}
        })
    }

    const serviceFetchBody = () => {
        return {service: {
            date: serviceDate,
            service_section_attributes: sectionAttributes()
        }}
    }

    const handleSubmit = async () => {
        const response = await fetch(APIROOT + '/services' + (serviceId ? `/${serviceId}` : ""), {
            method: serviceId ? "PUT" : "POST",
            headers: HEADERS,
            body: JSON.stringify(serviceFetchBody())
        })
        const json = await response.json()
        console.log(json)
    }

    useEffect(() => {
        if (serviceId) {
            async function fetchService() {
                let response = await fetch(APIROOT + `/services/${serviceId}`)
                if (!response.ok) {
                    console.log(`Redirecting to Service Index`)
                    history.push('/admin')
                } else {
                    let json = await response.json()
                    await setSections(json)
                }
            }
            fetchService()
        }
    }, [history, serviceId])

    return(

        <Fragment>
            <input type="date" value="serviceDate" onChange={e => {setServiceDate(e.target.value)}} />
            <SortableContainer onSortEnd={onSortEnd} useDragHandle>
                {sections ? populateSections() : null}
            </SortableContainer>
            <button onClick={handleSubmit}>{serviceId ? "Update Service" : "Create Service"}</button>
        </Fragment>

    )
}

export default SlideForm