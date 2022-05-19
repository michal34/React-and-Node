const protector = require('../../_protector');
const Plans = require('../../../models/plans');

const getPlans = async (req, res) => {
    const isLogged = protector.checkToken(req.cookies['app-token']);

    if (!isLogged) {
        return res.status(403).json('Forbidden');
    }

    const classId = req.query.classId;
    const plan_DB = await Plans.find({ classId });
    const plan = plan_DB[0].plan;

    const resposne = {
        success: true,
        plan,
    };

    return res.status(200).json(resposne);
}

const setPlans = async (req, res) => {
    const isLogged = protector.checkToken(req.cookies['app-token']);

    if (!isLogged) {
        return res.status(403).json('Forbidden');
    }

    const classId = req.body.classId;
    const day = req.body.day;
    const lessonNumber = req.body.lessonNumber;
    const subjectId = req.body.subjectId;

    const resposne = {
        success: false,
    };

    try {
        const plan_DB = await Plans.find({ classId });
        const data = Object.assign({}, plan_DB[0].plan);
        
        data[day][lessonNumber] = subjectId;

        await Plans.updateOne(
            { classId },
            { plan: data }
        );
        
        resposne.success = true;
    } catch(error) {
        console.log('Error');
    }

    return res.status(200).json(resposne);
}

module.exports = {
    getPlans,
    setPlans,
};