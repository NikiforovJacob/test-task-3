import { Request, Response, NextFunction } from 'express';
import { TrainingsService } from '../../services';
import BaseController from '../BaseController';

class TrainingsController extends BaseController {
  public init(): void {
    this.router.get('/', this.getTrainings);
    this.router.post('/', this.addTraining);
    this.router.delete('/:id', this.deleteTraining);
    this.router.put('/', this.editTraining);
  }

  public getTrainings(req: Request, res: Response, next: NextFunction): Response {
    return res.json({ result: TrainingsService.getTrainings() });
  }

  public addTraining(req: Request, res: Response, next: NextFunction): Response {
    return res.json({ result: TrainingsService.addTraining(req.body) });
  }

  public deleteTraining(req: Request, res: Response, next: NextFunction): Response {
    TrainingsService.deleteTraining(req.params.id);
    return res.json({ result: 'ok' });
  }

  public editTraining(req: Request, res: Response, next: NextFunction): Response {
    TrainingsService.editTraining(req.body);
    return res.json({ result: 'ok' });
  }
}

export default TrainingsController;
