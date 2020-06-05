import React, {useState, useEffect} from 'react';
import arrayMove from 'array-move';
import SortableContainer from '../components/SortableContainer.js'
import Section from './Section.js'
import {APIROOT} from '../../constraints/index.js'
import {useHistory} from 'react-router-dom'

const SlideForm = ({serviceId}) => {

    const [sections, setSections] = useState() //dummy state to start

    const history = useHistory()

    const onSortEnd = ({oldIndex, newIndex}) => { // do I need to take a picture of prev state before doing this?
        setSections(arrayMove(sections, oldIndex, newIndex))
    }

    const populateSections = () => {
        return sections.map((section, index) => {
            return <Section key={`section-${section.id}`} index={index} title={section.title} oldSlides={section.slides} />
        })
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
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {sections ? populateSections() : null}
        </SortableContainer>
    )
}

export default SlideForm