const rollup = require("rollup");
const typescript = require('rollup-plugin-typescript2');//typescript2 plugin
const glsl = require('rollup-plugin-glsl');

export default {
    input: '../src/Main.ts',
    onwarn:(waring,warn)=>{
        if(waring.code == "CIRCULAR_DEPENDENCY"){
            console.log("warnning Circular dependency:");
            console.log(waring);
        }
    },
    treeshake: false, //建议忽略
    plugins: [
        typescript({
            tsconfig:"../tsconfig.json",
            check: true, //Set to false to avoid doing any diagnostic checks on the code
            tsconfigOverride:{compilerOptions:{removeComments: true}},
            include:/.*.ts/,
        }),
        glsl({
            // By default, everything gets included
            include: /.*(.glsl|.vs|.fs)$/,
            sourceMap: false,
            compress:false
        }),
    ],
    output: {  // 必须 (如果要输出多个，可以是一个数组)
        file: '../bin/js/bundle.js',
        format: 'iife',
        name: 'laya',
        sourcemap: false
    },
};