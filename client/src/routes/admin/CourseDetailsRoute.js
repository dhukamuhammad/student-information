import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOC from '../../component/admin/HOC'
import CourseDetails from '../../pages/admin/course_details/CourseDetails'

const CourseDetailsRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/coursedetails' element={
                    <>
                        <HOC />
                        <CourseDetails />
                    </>
                } />
            </Routes>
        </div>
    )
}

export default CourseDetailsRoute
