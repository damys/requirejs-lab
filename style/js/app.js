require.config({
    baseUrl:'/style/js',
    urlArgs:'_=' + new Date().getTime(),
    // 默认为7s
    waitSeconds:20,
    paths:{
        jquery:[
            './lib/jquery.min',
            '//cdn.bootcss.com/jquery/2.2.3/jquery'
        ],
        bootstrap:'./lib/bootstrap/bootstrap',
        text:'./lib/text'
    },
    // 不兼容AMD 的模块
    shim:{
        'bootstrap':{
            'deps':['jquery'],         // 依赖的模块
            'exports':'bootstrap',     // 全局变量为模块对象
            'init':function($){        // 初始化函数，返回的对象代替exports 作为模块对象
                return $;
            }
        }
    },
    map:{
        // 'app/api':{
        //     jquery:'./lib/jquery.min'
        // },
        'app/api2':{
            jquery:'./lib/jquery2.min'
        }
    },
    config:{
        text:{
            onXhr:function(xhr, url){
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
            }
        }
    }
})


require([
    'jquery',
    './app/api',
    'bootstrap'], function( $, api, bootstrap){

    $('h1').css("color", 'red')

    $('#user').click(function(){
        // api.getUser().then(function(user){
        //     console.log(user)
        // })

        // text html
        api.loadUser();

        api.getUserByJsonp()
    })

    console.log(bootstrap)
})


// 配置不支持AMD 的库和插件， 也就是不用require/define 来写的
