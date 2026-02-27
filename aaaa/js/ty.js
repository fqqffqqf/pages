let ty_supabase = null;

/**
 * 初始化 Ty Supabase 客户端
 * @param {string} url - Supabase Project URL
 * @param {string} key - Supabase Anon Key
 */
function ty_init(url, key) {
  if (typeof supabase !== 'undefined') {
    ty_supabase = supabase.createClient(url, key);
    console.log("Ty Supabase client initialized.");
  } else {
    console.error("Supabase CDN library not loaded. Please include it before ty_init.");
  }
}

/**
 * 通用获取数据函数
 * @param {string} table - 表名
 * @param {object} options - 查询选项，如 { select: '*', order: 'id', ascending: true, filter: { column: 'value' } }
 * @returns {Promise<Array>} - 返回数据数组
 */
async function ty_get(table, options = {}) {
  if (!ty_supabase) {
    throw new Error("Ty Supabase client not initialized. Call ty_init first.");
  }

  let query = ty_supabase.from(table).select(options.select || '*');

  if (options.order) {
    query = query.order(options.order, { ascending: options.ascending !== false });
  }

  if (options.filter) {
    for (const [key, value] of Object.entries(options.filter)) {
      query = query.eq(key, value);
    }
  }

  const { data, error, status } = await query;
  if (error && status !== 406) {
    throw error;
  }
  return data || [];
  
}

/**
 * 通用添加数据函数
 * @param {string} table - 表名
 * @param {object} record - 要插入的记录对象
 * @returns {Promise<object>} - 返回插入的新记录
 */
async function ty_add(table, record) {
  if (!ty_supabase) {
    throw new Error("Ty Supabase client not initialized. Call ty_init first.");
  }

  const { data, error, status } = await ty_supabase
    .from(table)
    .insert([record])
    .select()
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
}

/**
 * 通用更新数据函数
 * @param {string} table - 表名
 * @param {number} id - 要更新的记录 ID
 * @param {object} updates - 要更新的字段对象
 * @returns {Promise<object>} - 返回更新后的记录
 */
async function ty_update(table, id, updates) {
  if (!ty_supabase) {
    throw new Error("Ty Supabase client not initialized. Call ty_init first.");
  }

  const { data, error, status } = await ty_supabase
    .from(table)
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error && status !== 406) {
    throw error;
  }
  return data;
}

/**
 * 通用删除数据函数
 * @param {string} table - 表名
 * @param {number} id - 要删除的记录 ID
 * @returns {Promise<void>}
 */
async function ty_delete(table, id) {
  if (!ty_supabase) {
    throw new Error("Ty Supabase client not initialized. Call ty_init first.");
  }

  const { error, status } = await ty_supabase
    .from(table)
    .delete()
    .eq('id', id);

  if (error && status !== 406) {
    throw error;
  }
}

console.log("Ty Supabase functions loaded.");



/**
 * 将字符串进行 Base64 编码
 * @param {string} str - 需要编码的原始字符串
 * @returns {string} - 编码后的 Base64 字符串
 */
function encodeToBase64(str) {
  // 1. encodeURIComponent 将字符串转换为 UTF-8 编码的百分号格式
  // 2. unescape 将百分号格式的字符串转换为 Latin-1 字符串 (这是关键步骤)
  // 3. btoa 对 Latin-1 字符串进行 Base64 编码
  return btoa(unescape(encodeURIComponent(str)));
}

/**
 * 将 Base64 字符串进行解码
 * @param {string} encodedStr - 需要解码的 Base64 字符串
 * @returns {string} - 解码后的原始字符串
 */
function decodeFromBase64(encodedStr) {
  // 1. atob 将 Base64 字符串解码为 Latin-1 字符串
  // 2. escape 将 Latin-1 字符串转换为百分号格式
  // 3. decodeURIComponent 将百分号格式的 UTF-8 编码还原为原始字符串
  return decodeURIComponent(escape(atob(encodedStr)));
}


const arr2 = [1, 2, 3, 5];

function yc() {

    for (let i = 0; i < arguments.length; i++) {
        let byId = document.getElementById(arguments[i]);
        if (byId) {
            byId.style.display = 'none';
        }

    }

}


function ycc(arr) {

    for (let i = 0; i < arr.length; i++) {

        let byId = document.getElementById(arr[i]);
        if (byId) {
            byId.style.display = 'none';
        }

    }
}

function xs() {

    for (let i = 0; i < arguments.length; i++) {
        let byId = document.getElementById(arguments[i]);
        if (byId) {
            byId.style.display = 'inline';
        }
    }

}

function xss(arr) {

    for (let i = 0; i < arr.length; i++) {
        let byId = document.getElementById(arr[i]);
        if (byId) {
            byId.style.display = 'inline';
        }
    }

}



function gxq(){
 return communityArray [Math.floor(Math.random() * communityArray .length)] 

}

function gr(arr){
 return arr[Math.floor(Math.random() * arr.length)] 

}



//刷新
function addRandomParamToUrl(url) {
    const timestamp = new Date().getTime();
        const questionMarkIndex = url.indexOf('?');
        if (questionMarkIndex === -1) {
            return  url +`?timestamp=${timestamp}`;
        }
        return url.slice(0, questionMarkIndex)+`?timestamp=${timestamp}`;


}


function sx() {
localStorage.setItem("duanHao", "");
    location.replace(addRandomParamToUrl(location.href));
}

   function dzz() {

 

        window.location.href = "ddz.html?timestamp="+ new Date().getTime();}
		
		 function ddz1() {

 

        window.location.href = "dddz1.html?timestamp="+ new Date().getTime();}



   function dzztest() {

 

        window.location.href = "ddztest.html?timestamp="+ new Date().getTime();}

   function dzzz() {

 

        window.location.href = "dddz.html?timestamp="+ new Date().getTime();}

async function fet(str) {
    try {
        const response = await fetch(str);
        const data = await response.json(); // 假设返回的数据是 JSON 格式，可根据实际情况修改
        // 这里可以对数据进行处理，例如筛选、转换等
        let arr0 = [];
        const arr = [];
        const pairs = data[0].lianjie.split("/");

        for (let i = 0; i < pairs.length; i++) {
            const [key, value] = pairs[i].split("-");
            arr0.push(`dz${key}`)

            arr[key] = parseInt(value);

        }

        // 假设返回的数据是一个数组，直接返回
        return [arr0, arr];
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}


function getJsonDataSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // 第三个参数为 false 表示同步请求
    
    // 关键修改2：强制浏览器用UTF-8解析响应，忽略响应头可能的错误编码声明
    xhr.overrideMimeType('application/json; charset=utf-8');
    try {
        xhr.send();
        if (xhr.status === 200) {
 console.log('原始响应文本：', xhr.responseText); 
            return JSON.parse(xhr.responseText);
        } else {
            throw new Error(`HTTP error! status: ${xhr.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function copyToClipboardt(text) {
    let tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showMessage(text);
}

function showMessage(s) {
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = s;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.display = 'block';

    setTimeout(function () {
        messageDiv.style.display = 'none';
    }, 1000);
}


/*
function showData(data) {
    let arr=convertString(data[0].lianjie)
    xss(arr[0]);
    return arr[1];


}
*/

function convertString(inputStr) {
    let arr0 = [];
    const arr = [];
    const arr3 = [];
    const pairs = inputStr.split("/");

    for (let i = 0; i < pairs.length; i++) {
        const [key, value] = pairs[i].split("-");
        arr0.push(`dz${key}`)

        arr[key - 1] = value

        arr3.push(key)
    }

    return [arr0, arr, arr3];
}

function checkArray(arr1, arr2) {
    let result = true;
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result = false;
            arr3.push(arr1[i]);
        }
    }

    return {
        isAllIncluded: result,
        nonIncludedElements: arr3
    };
}






function validateLianjieFormat(str) {
    if (!str || str.trim() === '') return false;
    
    // 1. 先按 '/' 分割成多组
    const groups = str.split('/');
    
    // 2. 正则表达式：^(\d+)-(\d{4}|\d{11})$
    // 解释：开头是一个或多个数字，中间是横杠，结尾是4位或11位数字
    const pattern = /^(\d+)-(\d{4}|\d{11})$/;
    
    // 3. 遍历每一组进行验证
    for (let group of groups) {
        if (!pattern.test(group.trim())) {
            return false; // 只要有一组不符合，就返回 false
        }
    }
    
    return true; // 所有组都符合
}




function numb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zm(min, max, caseOption) {
    if (min < 1 || min > 26 || max < 1 || max > 26 || min > max) {
        throw new Error('前两个参数必须在 1 - 26 范围内，且第一个参数不能大于第二个参数');
    }
    if (![0, 1, 2].includes(caseOption)) {
        throw new Error('第三个参数必须是 0、1 或 2');
    }
    const randomOffset = Math.floor(Math.random() * (max - min + 1)) + min - 1;
    let baseCode;
    if (caseOption === 1) {
        baseCode = 97;
    } else if (caseOption === 2) {
        baseCode = 65;
    } else {
        baseCode = Math.random() < 0.5 ? 97 : 65;
    }
    const letterCode = baseCode + randomOffset;
    return String.fromCharCode(letterCode);
}

function newdz() {

    let u = prompt("请输入尼玛"); 

    if (u !== null) {
        if (u == "尼玛") {  
            window.location.href = "dzscq/gengduo11.html?timestamp=" + new Date().getTime();
        } else {
            
              
                    alert("输入错误")
               
            
        }
    }
}
    
function newdz2() {

    window.location.href = "dzscq/gengduo22.html?timestamp="+ new Date().getTime();

}
function hao() {

    window.location.href = "tp/demo.html?timestamp="+ new Date().getTime();

}

function newtp() {

    window.location.href = "tp/tp.html"

}

function ewm() {

    window.location.href = "utils/ewm.html"

}

function di() {

    window.location.href = "utils/di.html"

}/*
function newbdsp() {

    window.location.href = "utils/spkc.html"

}*/
function newdzzy() {

    window.location.href = "dzscq/gengduo.html"

}

function newzy() {

    window.location.href = "zy/gengduo.html"

}

function newlj() {

    window.location.href = "lj/gengduo.html"

}

function newdipai1() {

    window.location.href = "http://60.204.211.179/jin_pai.html?timestamp="+ new Date().getTime();

}

function newdipai2() {

    window.location.href = "https://www.kdocs.cn/l/cnTIj3OJQCBz?timestamp="+ new Date().getTime();

}
function newdipai3() {

    window.location.href = "https://kdocs.cn/l/ccBUq3qvsp0e?timestamp="+ new Date().getTime();

}

function dijia() {

    window.location.href = "dijia/show.html?="+ new Date().getTime();

}


function xlsx_json()  {

    window.location.href = "dijia/xlsl.html?="+ new Date().getTime();

}

 function showMessage(s) {
        var messageDiv = document.getElementById('message');
        messageDiv.innerHTML = s;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.display = 'block';

        setTimeout(function () {
            messageDiv.style.display = 'none';
        }, 1000);
    }



function gra(arr) {
    
    if (!Array.isArray(arr) || arr.length === 0) {
        return null; 
    }
    
   
    const randomIndex = Math.floor(Math.random() * arr.length);
    

    return arr[randomIndex];
}
 
function A(){
  return zm(1,3,2)+"区"+numb(1,20)+"栋"+numb(1,100)+"室";
}

function B(){
 let n=numb(1,18) ;
return  numb(1,15)+"栋"+numb(1,6)+"单元"+n+"层"+n+"0"+numb(1,4);
}


function C(){
  return gxq()+numb(1,20)+"栋"+numb(1,100)+"室";
}
