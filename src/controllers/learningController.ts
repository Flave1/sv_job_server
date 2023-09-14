import { NextFunction, Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
/**
 * @swagger
 * tags:
 *   name: Learning
 *   description: Learning operations
 */
export class LearningController {
   /**
   * @swagger
   * components:
   *   parameters:
   *     page:
   *       in: query
   *       name: page
   *       required: true
   *       schema:
   *         type: string
   *     page_size:
   *       in: query
   *       name: page_size
   *       required: true
   *       schema:
   *         type: string
   */
 /**
   * @swagger
   * /learning/courses:
   *   get:
   *     summary: Get all courses
   *     tags: [Learning]
   *     parameters:
   *       - $ref: '#/components/parameters/page'
   *       - $ref: '#/components/parameters/page_size'
   *     responses:
   *       200:
   *         description: Successful response
   */
  static async GetCourses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const apiUrl = "https://www.udemy.com/api-2.0/courses?page="+req.query.page+"&page_size="+req.query.page_size;
    const headers = {
      Authorization:
        "Basic cnA2bVlHangxWUM4aGVzNENEYUtoUGVxd0w0S3c3MzVZcmlobjFGeTpkZ2lNeEd6OGp0YWNlYTE2QXFhaE9RT21uM0hIQ3NpVEY5RWNKZjlJeWR3dmVtdERzMG15NmVQaTBCVTMzS2JXbmpoWlAzMFo5TDlEWkw1bk5LM2psWVZzQUZGanFNUzNUYzdXc3ZWNHN3MGluSndOUUFvWm11QkxwR253Qm5JTQ==",
    };
    try {
      const response: AxiosResponse = await axios.get(apiUrl, { headers });

      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(200).json(response.status);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   * @swagger
   * components:
   *   parameters:
   *     courseId:
   *       in: query
   *       name: courseId
   *       required: true
   *       schema:
   *         type: string
   */

  /**
   * @swagger
   * /learning/course-details:
   *   get:
   *     summary: Get Course details
   *     tags: [Learning]
   *     parameters:
   *       - $ref: '#/components/parameters/courseId'
   *     responses:
   *       200:
   *         description: Successful response
   */
  static async GetCourseDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const apiUrl =
      "https://www.udemy.com/api-2.0/courses/" + req.query.courseId;
    const headers = {
      Authorization:
        "Basic cnA2bVlHangxWUM4aGVzNENEYUtoUGVxd0w0S3c3MzVZcmlobjFGeTpkZ2lNeEd6OGp0YWNlYTE2QXFhaE9RT21uM0hIQ3NpVEY5RWNKZjlJeWR3dmVtdERzMG15NmVQaTBCVTMzS2JXbmpoWlAzMFo5TDlEWkw1bk5LM2psWVZzQUZGanFNUzNUYzdXc3ZWNHN3MGluSndOUUFvWm11QkxwR253Qm5JTQ==",
    };
    try {
      const response: AxiosResponse = await axios.get(apiUrl, { headers });

      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(200).json(response.status);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }


   /**
   * @swagger
   * components:
   *   parameters:
   *     courseId:
   *       in: query
   *       name: courseId
   *       required: true
   *       schema:
   *         type: string
   */

  /**
   * @swagger
   * /learning/course-curriculum:
   *   get:
   *     summary: Get Course curriculum
   *     tags: [Learning]
   *     parameters:
   *       - $ref: '#/components/parameters/courseId'
   *     responses:
   *       200:
   *         description: Successful response
   */
  static async GetCourseCurriculum(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const apiUrl =
      "https://www.udemy.com/api-2.0/courses/"+ req.query.courseId +"/public-curriculum-items/?page=1&page_size=50";
    const headers = {
      Authorization:
        "Basic cnA2bVlHangxWUM4aGVzNENEYUtoUGVxd0w0S3c3MzVZcmlobjFGeTpkZ2lNeEd6OGp0YWNlYTE2QXFhaE9RT21uM0hIQ3NpVEY5RWNKZjlJeWR3dmVtdERzMG15NmVQaTBCVTMzS2JXbmpoWlAzMFo5TDlEWkw1bk5LM2psWVZzQUZGanFNUzNUYzdXc3ZWNHN3MGluSndOUUFvWm11QkxwR253Qm5JTQ==",
    };
    try {
      const response: AxiosResponse = await axios.get(apiUrl, { headers });

      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(200).json(response.status);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

}
