define(['jquery'], function($){
    return {
        getUser:function(){
            // 异步
            var def = $.Deferred();
            require(['./app/user'], function(user){
                def.resolve(user)
            })

            return def;
        },

        loadUser:function(){
            require(['text!/user.html'], function(tpl){
                $('#userinfo').html(tpl)
            })
        },

        getUserByJsonp:function(){
            $.ajax({
                url:'http://127.0.0.1:808/user.js',
                dataType:'jsonp',
                jsonpCallback:'onloaded',
                success: function(data){
                    console.log(data)
                }
            })

            require(['http://127.0.0.1:808/user_adm.js'], function(user){
                console.log(user)
            })
        }
         
    }
})

function onloaded(user){
    console.log(user)
}



