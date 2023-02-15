import { Reporter, TestCase, TestResult, Suite, FullConfig, FullResult } from '@playwright/test/reporter';
import * as fs from 'fs';

class MyReporter implements Reporter {
    onBegin(config, suite: Suite) {
        console.log('Execution of ' + suite.allTests().length + ' tests');
    }
    onEnd(result) {
        console.log('Execution finished with status of '+ result.status);
    }
    onTestBegin(test) {
        console.log('Executing of ' + test.title + ' started');
    }
    onTestEnd(test, result) {
        const execTime = result.duration;
        const data = {
            test: test.title,
            status: result.status,
            execTime: execTime,
            errors: result.errors
        };
        //indent the data extracted from playwright
        const dataToString = JSON.stringify(data, null, 2);
        console.log(dataToString);
        fs.writeFileSync("test-result.json", dataToString);
    }
}

export default MyReporter;