const uuid = require('uuid');
const tryCatchWrapper = require('../utils/tryCatchWrapper');
const { CallRequest } = require('../models/models');
const response = require('../error/response');
const { statuses } = require('../utils/consts');
const { getCookie } = require('../utils/cookies');

class CallRequestController {
    async create(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { phone_number, name } = req.body;
                const code = uuid.v4();
                const callRequest = await CallRequest.create({ name, phone_number, code });
                return response(res, statuses.SUCCESS, { payload: callRequest });
            },
            req, res, next, 'CallRequestController.create'
        )
    }

    async edit(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { code } = req.params;
                let { name, phone_number } = req.body;
                const callRequest = await CallRequest.update({ name, phone_number }, { where: { code } });
                return response(res, statuses.SUCCESS, { payload: callRequest });
            },
            req, res, next, 'CallRequestController.edit'
        )
    }

    async delete(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { code } = req.params;
                const callRequest = await CallRequest.findOne({ where: { code } });

                await CallRequest.destroy(
                    {
                        where: { code }
                    }
                );
                return response(res, statuses.SUCCESS, { payload: { callRequest, deleted: true } });
            },
            req, res, next, 'CallRequestController.delete'
        )
    }

    async getCallRequestByCode(req, res, next) {
        tryCatchWrapper(
            async () => {
                const { code } = req.params;
                const callRequest = await CallRequest.findOne({ where: { code } });
                return response(res, statuses.SUCCESS, { payload: callRequest });
            },
            req, res, next, 'CallRequestController.getCallRequestByCode'
        )
    }

    async getAllCallRequests(req, res, next) {
        tryCatchWrapper(
            async () => {
                const callRequests = await CallRequest.findAll();
                return response(res, statuses.SUCCESS, { payload: callRequests });
            },
            req, res, next, 'CallRequestController.getAllCallRequests'
        )
    }

}

module.exports = new CallRequestController();