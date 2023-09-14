
import { LearningController } from '../learningController';
import { Express } from 'express';

const basePath: String = '/learning';
export const learningRoute = (app: Express) => {
    app.get(`${basePath}/course-details`, LearningController.GetCourseDetails);
    app.get(`${basePath}/courses`, LearningController.GetCourses);
    app.get(`${basePath}/course-curriculum`, LearningController.GetCourseCurriculum);
}