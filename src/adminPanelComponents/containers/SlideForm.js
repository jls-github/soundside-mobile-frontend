import React, {useState, useEffect, Fragment} from 'react';
import arrayMove from 'array-move';
import SortableContainer from '../components/SortableContainer.js'
import Section from './Section.js'
import {APIROOT, HEADERS} from '../../constraints/index.js'
import {useHistory} from 'react-router-dom'

const SlideForm = ({serviceId}) => { //this is messy and could be claned up with a state manager

    const [sections, setSections] = useState()
    const [serviceDate, setServiceDate] = useState()

    const history = useHistory()

    //onSortEnds for react-sortable-hoc

    const onSectionSortEnd = ({oldIndex, newIndex}) => {
        setSections(arrayMove(sections, oldIndex, newIndex))
    }

    const onSlideSortEnd = (({oldIndex, newIndex}, sectionId) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                section.slides = arrayMove(section.slides, oldIndex, newIndex)
            }
            return section
        }))
    })

    //populates sections based on state

    const populateSections = () => {
        return sections.map((section, index) => {
            return <Section
                key={`section-${section.id}`} 
                id={section.id} index={index} 
                title={section.title} 
                slides={section.slides} 
                onSectionTitleChange={onSectionTitleChange} 
                onSlideTitleChange={onSlideTitleChange}
                onSlideContentChange={onSlideContentChange}
                onSlideSortEnd={onSlideSortEnd}
                />
        })
    }

    //controlled forms

    const onSectionTitleChange = (e, id) => {
        setSections(sections.map(section => {
            if (section.id === id) {
                section.title = e.target.value
            }
            return section
        }))
    }

    const onSlideTitleChange = (e, sectionId, slideId) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                section.slides.map(slide => {
                    if (slide.id === slideId) {
                        slide.title = e.target.value
                    }
                    return slide
                })
            }
            return section
        }))
    }

    const onSlideContentChange = (e, sectionId, slideId) => {
        setSections(sections.map(section => {
            if (section.id === sectionId) {
                section.slides.map(slide => {
                    if (slide.id === slideId) {
                        slide.content = e.target.value
                    }
                    return slide
                })
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

    //initial fetch for editing

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
            <SortableContainer onSortEnd={onSectionSortEnd} useDragHandle>
                {sections ? populateSections() : "loading..."}
            </SortableContainer>
            <button onClick={handleSubmit}>{serviceId ? "Update Service" : "Create Service"}</button>
        </Fragment>

    )
}

export default SlideForm