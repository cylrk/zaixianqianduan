import request from '@/utils/request'

export default {
    getTeaListPage(page,limit,teacherQuery){
        return request({
            url: `/serviceTea/edu-teacher/pageTeacherCondition/${page}/${limit}`,
            method: 'post',
            data: teacherQuery
          })
    },
    deleteTeacherId(id){
        return request({
            url: `/serviceTea/edu-teacher/${id}`,
            method: 'delete'
          })
    },
    addTeacher(teacher){
        return request({
            url: `/serviceTea/edu-teacher/addTeacher`,
            method: 'post',
            data : teacher
          })
    },
    getTeacherInfo(id){
        return request({
            url: `/serviceTea/edu-teacher/findById/${id}`,
            method: 'post'
        
          })
    },
    updateTeacherInfo(teacher){
        return request({
            url: `/serviceTea/edu-teacher/updateTeacher`,
            method: 'post',
            data:teacher
          })
    }
}