import { Job } from "bullmq";

export interface IJob{
    name:string // Job Name,
    payload?: Record<string,unknown>
    handle:(job ?: Job) => void
    failed:(job ?: Job) => void
}