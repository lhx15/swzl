import {
  post,
  get,
  postForm,
} from './api'
import { DOMAIN_UPLOAD } from '../assets/js/domain'

// let _xRequestedWith 
let _config = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}

// 登陆
export const userLogin = (data) => post('/user', data, _config)

// 注册
export const userRegister = (data) => post('/register', data, _config)

// 获取用户信息
export const getUserInfo = () => get('/myUser', _config)

// 修改密码
export const changePass = (data) => post('/changePass', data, _config)

// 退出登陆
export const loginOut = () => get('/loginOut', _config)

// 获取物品
export const getGoods = (data) => post('/getGoods', data, _config)

// 添加物品
export const addGoods = (data) => post('/addGoods', data, _config)

// 删除物品
export const deleteGoods = (data) => get('/deleteGoods',data, _config)


// 达人黑/白名单列表
export const queryAuthorList = (data) => post('/contentPool/blackList/author/list', data, _config)

// 导入达人黑/白名单
export const importAuthorExcel = (data) => post('/contentPool/blackList/author/add', data, _config)

// 移除达人黑/白名单列表
export const removeAuthorList = (data) => post('/contentPool/blackList/author/delete', data, _config)

// 清空黑/白名单
export const deleteAuthorListAll = (data) => post('/contentPool/blackList/author/deleteAll', data, _config)

// excel导入实现移除黑/白名单
export const deleteAuthorListByExcel = (data) => post('/contentPool/blackList/author/deleteByExcel', data, _config)

// 菜单&信息
export const queryInfo = (data) => post('/index/all', data, _config)

// 黑/白名单列表
export const queryManagementList = (data) => post('/businessPool/blackList/list', data, _config)

// 清空黑白名单
export const clearManagementList = (data) => post('/businessPool/blackList/deleteAll', data, _config)

// 移除黑/白名单列表
export const removeManagementList = (data) => post('/businessPool/blackList/delete', data, _config)

// 导入黑/白名单
export const importManagementExcel = (data) => post('/businessPool/blackList/add', data, _config)

// 移出黑白名单  Excel
export const removeManagementExcel = (data) => post('/businessPool/blackList/deleteByExcel', data, _config)

/**
 * @description 新增规则
 * @param {object} form
 */
export const addBusinessPoolRule = (form) => post('/businessPool/rule/add', form, _config)

/**
 * @description 更新规则
 * @param {object} form
 */
export const updateBusinessPoolRule = (form) => post('/businessPool/rule/edit', form, _config)

/**
 * @description 删除规则/下线
 * @param {object} form
 */
export const delBusinessPoolRule = (form) => post('/businessPool/rule/offline', form, _config)

/**
 * @description 根据业务池id获取业务池详情
 * @param {number} id
 */
export const getBusinessPoolRule = (id) => post('/businessPool/rule/get', { id }, _config)

/**
 * @description 根据关键词搜索品牌列表
 * @param {object} data
 */
export const queryBrandList = (data) => post('/brand/queryBrandList', data , _config)

/**
 * @description 规则上线
 * @param {*} id 
 */
export const onlineBusinessPoolRule = (id) => post('/businessPool/rule/online', { id }, _config) 

/**
 * @description 获取所有的渠道和子渠道
 */
export const getAllChannel = _ => post('/channel/listAll', _config)

/**
 * @description 获取所有内容样式
 */
export const getAllStyle = _ => post('/style/list')

/**
 * @description 根据父品类id获取子品类列表
 */
export const getCategory = (fid = 0) => post('/category/list', { fid }, _config)

/**
 * @description 业务池列表
 * @param {number} poolId 内容池id
 * @param {number} id 规则id
 * @param {string} name
 * @param {number} status
 * @param {number} page
 * @param {number} pageSize
 */
export const queryBusinessPoolList = (poolId, id, name, status, page, pageSize) => post('/businessPool/rule/list', { poolId: poolId, id: id, name: name, status: status, page: page, pageSize: pageSize }, _config)

/**
 * @description 权限校验
 * @param {string} resCode
 */
export const checkAuthorRoot = (resCode) => post('/uim/checkAuth', { resCode: resCode }, _config)

/**
 * @description 创建内容池
 * @param {string} resCode
*/
export const addContentPoolList = (data) => post('/contentPool/add', data, _config)

/**
 * @description 编辑内容池
 * @param {string} resCode
*/
export const editContentPoolList = (data) => post('/contentPool/edit', data, _config)

/**
 * @description 内容池列表
 * @param {string}
*/
export const getContentPoolList = (data) => post('/contentPool/list', data, _config)

/**
 * @description 数据看板列表
 * @param {number} startTime
 * @param {string} endTime
 * @param {number} poolId
 * @param {number} page
 * @param {number} pageSize
*/
export const getDataContentList = (data) => post('/contentStats/list', data, _config)

/**
 * @description 数据导出
 * @param {number} startTime
 * @param {string} endTime
 * @param {number} poolId
*/
export const dataContentExport = (data) => post('/contentStats/export', data, _config)

/**
 * @description 获取所有标签分类
 * @param {string}
*/
export const getTagList = (data) => post('/tag/type/list', data, _config)

/**
 * @description 根据标签分类拉取标签列表
 * @param {string}
*/
export const getTagByType = (data) => post('/tag/list', data, _config)

/**
 * @description 根据样式拉取子渠道
 * @param {string}
*/
export const getChannelByStyle = (data) => post('/channel/listByStyle', data, _config)

/**
 * @description 获取内容来源分类
 */
export const getSourceTypeList = (data) => post('/source/type/list', data, _config)

/**
 * @description 获取内容来源
 * @param {number} type
 */
export const getSourceList = (type) => post('/source/list', { type }, _config)

/**
 * @description 根据内容来源类型获取样式
 * @param {number} sourceType
 */
export const getStyleListBySourceType = (sourceType) => post('/style/listBySourceType', { sourceType }, _config)

/**
 * @description 获取文章分类
 * @param {string}
*/
export const getArticleTypes = (data) => post('/article/getAllArticleType', data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 获取文章功能分类
 * @param {string}
*/
export const getFunctionTypes = (data) => post('/article/getAllArticleFunctionTypeList', data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 删除活动投稿导入的id
 */
export const deleteActivityRule = data => post('/contentPool/rule/activity/delete', data, _config)

/**
 * @description 黄金流程内容池
 */
export const goldFlowContentPoolList = data => post('/goldFlowContentPool/list', data, _config)

/**
 * @description 搜索词列表接口
 */
export const keywordManagerList = data => post('/keywordManager/list', data, _config)

/**
 * @description 搜索词警戒值接口
 */
export const keywordManagerSetThreshold = (data) => post('/keywordManager/setThreshold', data, _config)

/**
 * @description 14.根据挑战获取素材
 * @param {Integer} challengeId 
 * @param {Integer} pageNum 
 * @param {Integer} pageSize 
 */
export const getContentByChallengeId = (data) => get('/ugc_getContentByChallengeId', data, { baseURL: DOMAIN_UGC }, true)

/**
 * @description 15.删除挑战下素材
 * @param {Integer} challengeId 
 * @param {Integer} contentId
 * @param {String} erp 
 */
export const removeChallengeContentById = (data) => get('/ugc_removeChallengeContentById', data, { baseURL: DOMAIN_UGC }, true )
/**
 * @description 16.查询UGC广告位
 * @param {Integer} pageNum
 * @param {Integer} pageSize
 */
export const queryAllBannerAd = (data) => postForm('/ugc_queryAllBannerAd', data, { baseURL: DOMAIN_UGC }, _config)

/**
* @description 16.更新UGC广告位
* @param {Integer} id
* @param {String} adTitle
* @param {Integer} adStatus
* @param {String} adImage
* @param {String} beginTime
* @param {String} endTime
* @param {String} jumpLink
* @param {String} operator
* @param {Integer} height
* @param {Integer} width
 */
export const modifyBannerAd = (data) => postForm('/ugc_modifyBannerAd', data, { baseURL: DOMAIN_UGC }, true)

/**
 * @description 17.新增UGC广告位
 * @param {Integer} id
 * @param {String} adTitle
 * @param {Integer} adStatus
 * @param {String} adImage
 * @param {String} beginTime
 * @param {String} endTime
 * @param {String} jumpLink
 * @param {String} operator
 * @param {Integer} height
 * @param {Integer} width
 */
export const addBannerAd = (data) => postForm('/ugc_addBannerAd', data, { baseURL: DOMAIN_UGC },true )


/**START 内容审核-单品 子渠道8*/

/**
 * @description 根据素材id，获取素材详情
 * @param {string} id 素材id
*/
export const getArticleByIdNew = (data) => post('/discoveryNiceGoods/singleGoods', data,{ baseURL: DOMAIN_AUDIT })


/**
 * @description 根据标签关键字，查询标签
 * @param {string} tagName 标签关键字
*/
export const getTagByNameNew = (data) => post('/tag/queryTagByName', data, { baseURL: DOMAIN_AUDIT })


/**START 内容审核-UGC 子渠道31*/

/**
 * @description 上传base64格式的图片
 * @param {Array} imgs
 */
export const uploadBase64ToImg = (data) => postForm('/client.action', data, { baseURL: DOMAIN_UPLOAD });

/**
 * @description 根据素材id，获取素材详情
 * @param {String} id 
 */
export const getAuditContentById = (url, data) => post(url, data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 根据父级类目id,查询子类目
 * @param {String} id
 */
export const getSubCategoriesFromAudit = (data) => post('/category/getSubCategories', data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 获取所有挑战标签
 * @param {*}
 */
export const getListChallenge = (data) => post('/article/listChallenge', data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 内容审核编辑提交内容
 * @param {*} data
 */
export const doEdit = (url, data) => post(url, data, { baseURL: DOMAIN_AUDIT })

/**
 * @description 18. 挑战添加素材
 * @param {Integer} challengeId
 * @param {String} contentId
 * @param {String} erp
 */
export const addContentToChallenge = (data) => postForm('/ugc_addContentToChallenge', data, {
  baseURL: DOMAIN_UGC
}, true)

/**
 * @description 19. 创建挑战
 * @param {Object} data
 */
export const saveChallenge = (data) => postForm('/ugc_saveChallenge', data, {
  baseURL: DOMAIN_UGC
}, true)

/**
 * @description 19. 编辑挑战
 * @param {Object} data
 */
export const checkChallenge = (data) => postForm('/ugc_checkChallenge', data, {
  baseURL: DOMAIN_UGC
}, true)

/**
 * @description 20. 置顶挑战素材
 * @param {Object} data
 */
export const TopContentById = (data) => postForm('/ugc_TopContentById', data, {
  baseURL: DOMAIN_UGC
}, true)

/**
 * @description 20. 置顶挑战素材
 * @param {Object} data
 */
export const GetRunningChallenges = (data) => postForm('/ugc_GetRunningChallenges', data, {
  baseURL: DOMAIN_UGC
}, true)

/**
 * @description 20. 置顶挑战素材
 * @param {Object} data
 */
export const topChallenge = (data) => postForm('/ugc_topChallenge', data, {
  baseURL: DOMAIN_UGC
}, true)
