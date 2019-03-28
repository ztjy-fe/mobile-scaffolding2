import Mock from 'mockjs'
import { USER_API_URL } from '@/api/modules/user'

export default {
	loginMock () {
		Mock.mock(USER_API_URL.LOGIN, {
			code: 10000,
			messase: 'ok',
			body: {}
		})
	}
}
