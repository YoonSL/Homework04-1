const $ = function(seletor){
    const nodeList = document.querySelectorAll(selector);

    const append = function(content){
        for(let i=0;i<nodeList.length;i++){
            nodeList[i].innerhtml += content;
        }
    }
     const click = function(action,cb){
         for(let i=0;i<nodeList.length;i++){
             nodeList[i].addEventListener(action,cb);
         }
     }

     const html = function(content){
         for(let i = 0; i < nodeList.length; i++){
            nodeList[i].innerhtml = content;
         }
     }

     const val = function(content){
         if (content === undefined){
             return nodeList[0].value;
         } else{
             nodeList[0].value = content;
         }
     }








    const publicAPI = {
        append:append,
        onClick:click,
        html: html,
        val: val
    };

    return publicAPI;
}