import request from '@/utils/request'

export default {
    //分页讲师查询的方法
  getTeacherList(page,limit) {
    return request({
      url: `/serviceTea/eduservice/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: `/serviceTea/eduservice/teacherFront/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }

}