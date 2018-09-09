const $ = function(seletor){
    const nodeList = document.querySelectorAll(selector);

    const append = function(content){
        for(let i=0;i<nodeList.length;i++){
            nodeList[i].innerhtml += content;
        }
    }























    const publicAPI = {

    };

    return publicAPI;
}