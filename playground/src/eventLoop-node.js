/*
 * @Author: TonyInBeijing
 * @Date: 2023-09-07 15:38:41
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-07 16:49:56
 * @FilePath: /notebook/playground/src/eventLoop-node.js
 * @Description: 
 * 
 */
setTimeout(() => {
    console.log("timeout");
}, 0);
setImmediate(() => {
    console.log("immediate");
})

//! timeout 和 immedieate 打印顺序不确定
const fs = require('fs');
const logger = require('../common/logger');
const ITERATIONS_MAX = 2;
let iteration = 0;
const start = Date.now();
const msleep = (i) => {
    for (let index = 0; Date.now() - start < i; index++) {
        // do nonthing
    }
}
Promise.resolve().then(() => {
    // Microtask callback runs AFTER mainline, even though the code is here
    logger.info('Promise.resolve.then', 'MAINLINE MICROTASK');
});
logger.info('START', 'MAINLINE');
const timeout = setInterval(() => {
    logger.info('START iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    if (iteration < ITERATIONS_MAX) {
        setTimeout((iteration) => {
            logger.info('TIMER EXPIRED (from iteration ' + iteration + '): setInterval.setTimeout', 'TIMERS PHASE');
            Promise.resolve().then(() => {
                logger.info('setInterval.setTimeout.Promise.resolve.then', 'TIMERS PHASE MICROTASK');
            });
        }, 0, iteration);
        fs.readdir(__dirname, (err, files) => {
            if (err) throw err;
            logger.info('fs.readdir() callback: Directory contains: ' + files.length + ' files', 'POLL PHASE');
            queueMicrotask(() => logger.info('setInterval.fs.readdir.queueMicrotask', 'POLL PHASE MICROTASK'));
            Promise.resolve().then(() => {
                logger.info('setInterval.fs.readdir.Promise.resolve.then', 'POLL PHASE MICROTASK');
            });
        });
        setImmediate(() => {
            logger.info('setInterval.setImmediate', 'CHECK PHASE');
            Promise.resolve().then(() => {
                logger.info('setInterval.setTimeout.Promise.resolve.then', 'CHECK PHASE MICROTASK');
            });
        });
        // msleep(1000); // 等待 I/O 完成
    } else {
        logger.info('Max interval count exceeded. Goodbye.', 'TIMERS PHASE');
        clearInterval(timeout);
    }
    logger.info('END iteration ' + iteration + ': setInterval', 'TIMERS PHASE');
    iteration++;
}, 0);
logger.info('END', 'MAINLINE');