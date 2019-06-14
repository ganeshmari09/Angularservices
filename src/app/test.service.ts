export class TestService {
    logStatusChange1(status: string,DataOjb: any) {
        console.log('A server status changed, new status: ' + status);

        for(let k=0;k<DataOjb.length;k++){
          console.log("Name :"+ DataOjb[k].name +"Status :"+DataOjb[k].status );
        }
      }

}