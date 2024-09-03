import { ITaskCreateApi } from '../interfaces/task';
import { TaskInfosInterface } from '../pages/task/create/TaskInfo/taskInfos.zod';
import { colorConversion } from './colorConversion';
import { statusConversion } from './statusConversion';

export function conversionToCreateTaskDataApi(
  data: TaskInfosInterface,
  userId: string | undefined,
): ITaskCreateApi {
  const color = colorConversion(data.cor);
  const status = statusConversion(data.status);
  let dataApi:Date;

  if(data.data == '' || data.data == null){
    dataApi = new Date()
  }else{
    dataApi = new Date(data.data)
  }

  return {
    userId: userId,
    title: data.título,
    description: data.descrição,
    status: status,
    limitDate: dataApi,
    color: color,
  };
}
