import { Request, Response } from 'express';
import { WAMonitoringService } from '../services/monitor.service';
import { RepositoryBroker } from '../repository/repository.manager';
export declare class ViewsController {
    private readonly waMonit;
    private readonly repository;
    constructor(waMonit: WAMonitoringService, repository: RepositoryBroker);
    qrcode(request: Request, response: Response): Promise<void>;
}
