import { AuthConfig as SPAuthConfigurator } from 'node-sp-auth-config';
import { ISPPullOptions, ISPPullContext, Download as IDownload } from 'sppull';

const Download: IDownload = require('sppull');
const sppull = Download.sppull;

(new SPAuthConfigurator()).getContext().then((context) => {

    let pullContext: ISPPullContext = <any>{
        siteUrl: context.siteUrl,
        ...context.authOptions
    };

    let pullOptions: ISPPullOptions = {
        spRootFolder: 'Shared%20Documents',
        dlRootFolder: './Downloads/Documents'
    };

    sppull(pullContext, pullOptions);

}).catch(console.log);
