import React, {useState, useEffect, useRef} from 'react';
import arrayMove from 'array-move';
import SortableContainer from '../components/SortableContainer.js'
import Section from './Section.js'
import {APIROOT, HEADERS} from '../../constraints/index.js'
import {useHistory} from 'react-router-dom'
import ValidationHOC from '../HOCs/ValidationHOC.js'
import AdminPanelWrapperHOC from '../HOCs/AdminPanelWrapperHOC'


const SlideForm = ({serviceId}) => { //this is messy and could be claned up with a state manager

    const [sections, setSections] = useState(null)
    const [serviceDate, setServiceDate] = useState("")
    const [nextSection, setNextSection] = useState(0)
    const [nextSlide, setNextSlide] = useState(0)

    const history = useHistory()

    const slideFormContainer = useRef(null)

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
                onAddSlide={onAddSlide}
                />
        })
    }

    //add additional sections and slides

    const onAddSection = () => {
        setSections([
            ...sections, {
            title: "",
            id: nextSection,
            slides: [
                {
                    title: "",
                    content: "",
                    id: nextSlide
                }
            ]
        }])
        setNextSection(nextSection + 1)
        setNextSlide(nextSlide + 1)
    }

    const onAddSlide = (sectionId) => {
        setSections([
            ...sections.map(section => {
                if (section.id === sectionId) {
                    return {...section, slides: [...section.slides, {
                        title: "",
                        content: "",
                        id: nextSlide
                    }]}
                }
                return section
            })
        ])
        setNextSlide(nextSlide + 1)
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
            return {title: section.title, slides_attributes: slideAttributes(section.slides)}
        })
    }

    const serviceFetchBody = () => {
        return {service: {
            date: serviceDate,
            service_sections_attributes: sectionAttributes()
        }}
    }

    const handleSubmit = async () => {
        const response = await fetch(APIROOT + '/services' + (serviceId ? `/${serviceId}` : ""), {
            method: serviceId ? "PUT" : "POST",
            headers: {...HEADERS, Authorization: `Bearer ${localStorage.getItem("token")}`},
            body: JSON.stringify(serviceFetchBody())
        })
        const json = await response.json()
        if (json.error) {
            console.log(json.error)
        } else {
            history.push('/admin')
        }
    }

    const handleDelete = async () => {
        const response = await fetch(APIROOT + '/services/' + serviceId, {
            method: "DELETE",
            headers: {...HEADERS, Authorization: `Bearer ${localStorage.getItem("token")}`}
        })
        const json = await response.json()
        history.push('/admin')
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
                    await setServiceDate(json.date)
                    await setSections(json.sections)
                    await setNextSection(json.sections[json.sections.length - 1].id + 1)
                    await setNextSlide(Math.max(...json.sections.map(section => {
                        return section.slides.map(slide => slide.id)
                    }).flat()) + 1)
                }
            }
            fetchService()
        } else {
            setSections([
                {
                title: "",
                id: nextSection,
                slides: [
                    {
                        title: "",
                        content: "",
                        id: nextSlide
                    }
                ]
            }])
            setNextSection(nextSection + 1)
            setNextSlide(nextSlide + 1)
        }
    }, [history, serviceId])

    return(

        <div className="slide-form-wrapper" ref={slideFormContainer}>
            <div className="section-date-wrapper">
                Service Date<br />
                <input type="date" value={serviceDate} onChange={e => {setServiceDate(e.target.value)}} />
            </div>
            <SortableContainer onSortEnd={onSectionSortEnd} lockAxis="y" helperContainer={slideFormContainer.current}>
                {sections ? populateSections() : "loading..."}
            </SortableContainer>
            <div className="slide-button-wrapper">

                <button className="new-section-button" onClick={onAddSection}>Add new section</button>
                <button onClick={handleSubmit}>{serviceId ? "Update Service" : "Create Service"}</button>
            </div>
            {serviceId ? <button onClick={handleDelete}>Delete Service</button> : null}
        </div>

    )
}

export default ValidationHOC(AdminPanelWrapperHOC(SlideForm))