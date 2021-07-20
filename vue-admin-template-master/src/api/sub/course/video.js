import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request({
            url: '/serviceTea/edu-video/addVideo',
            method: 'post',
            data: video
          })
    },
    
    //删除小节
    deleteVideo(id) {
        return request({
            url: '/serviceTea/edu-video/'+id,
            method: 'delete'
          })
    },
    //修改小节
    updateVideo(video) {
        return request({
            url: '/serviceTea/edu-video/updateVideo',
            method: 'post',
            data:video
          })
    },
    //根据id查询小节
    getVideoById(videoId) {
        return request({
            url: '/serviceTea/edu-video/byId/'+videoId,
            method: 'get'
          })
    },
    deleteAliyunvod(id){
        return request({
            url: `/eduvod/video/deleteAlyVideo/`+id,
            method: 'delete'
          })
    }
    
}