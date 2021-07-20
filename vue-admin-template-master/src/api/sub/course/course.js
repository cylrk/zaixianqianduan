import request from '@/utils/request'
export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/serviceTea/edu-course/addCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/serviceTea/edu-teacher/findALL',
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(id) {
        return request({
            url: '/serviceTea/edu-course/getCourseInfo/'+id,
            method: 'get'
          })
    },
    //根据课程id查询最终发布的基本信息
    getPublishCourseInfo(id) {
        return request({
            url: '/serviceTea/edu-course/getPublishCourseInfo/'+id,
            method: 'get'
          })
    },
    //修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/serviceTea/edu-course/updateCourseInfo',
            method: 'post',
            data: courseInfo
          })
    },
    //发布课程信息
    publihCourse(courseid) {
        return request({
            url: '/serviceTea/edu-course/publihCourse/'+courseid,
            method: 'post'
          })
    },
    //获取课程基本信息
    getAllCourse() {
        return request({
            url: '/serviceTea/edu-course/getAllCourse/',
            method: 'get'
          })
    },
    //删除课程信息
    deleteById(courseid) {
        return request({
            url: '/serviceTea/edu-course/deleteById/'+courseid,
            method: 'get'
          })
    },
    

}
