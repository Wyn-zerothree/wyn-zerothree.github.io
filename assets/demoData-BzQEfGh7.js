import{M as e,N as t,nt as n}from"./index-DEe_83XJ.js";var r=n({seedDemoData:()=>u}),i=864e5;function a(e){let t=new Date(Date.now()+e*i);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}function o(e,t,n=0){let r=new Date(Date.now()+e*i);return r.setHours(t,n,0,0),r.getTime()}var s=[{id:`workout`,start:`06:00`,end:`08:00`,title:`健身`,items:[`起床洗漱、喝水`,`出门训练`,`练后快碳`]},{id:`study-am`,start:`08:00`,end:`12:00`,title:`学习（上午）`,items:[`背八股 + 刷算法 2 题`,`DeepResearch 架构复盘`]},{id:`lunch`,start:`12:00`,end:`13:00`,title:`午饭 + 休息`,items:[`午饭`,`午休 30 分钟`]},{id:`study-pm`,start:`13:00`,end:`18:00`,title:`学习（下午）`,items:[`投递 5 个岗位`,`笔面试复盘整理`]},{id:`dinner`,start:`18:00`,end:`19:00`,title:`晚饭 + 休息`,items:[`晚饭`,`散步 20 分钟`]},{id:`study-night`,start:`19:00`,end:`22:00`,title:`学习（晚上）`,items:[`Vue3 / TS 学习 1 小时`,`写今日总结`]},{id:`wind-down`,start:`22:00`,end:`23:00`,title:`收拾洗漱 + 娱乐`,items:[`收拾桌面`,`洗漱`,`娱乐放松`]},{id:`sleep`,start:`23:00`,end:`06:00`,title:`睡觉`,items:[`23:00 前上床`]}],c=[{title:`DeepResearch 面试讲解稿（3 分钟版）`,tags:[`面试`,`项目`],content:`# DeepResearch 一句话

基于 LangGraph 的 8 节点多智能体研报系统，能源领域语料，自己做了检索、规划、写作、审校的全链路编排。

## 必讲的三个点

1. **为什么用 LangGraph 而不是一条链**：研报任务有明确的回环（审校不过要退回重写），图结构能原生表达条件分支
2. **防注入探针**：语料里混入恶意指令的测试从 12 行泄漏降到 0 行
3. **成本核算**：单篇研报 token 成本压到原来的 1/3，靠摘要压缩 + 缓存中间结果

## 被追问怎么办

- 问 eval → 讲 chunk_size 消融实验
- 问落地 → 讲 MCP 工具接入和失败重试
`},{title:`秋招投递策略（11 月版）`,tags:[`秋招`],content:`# 现状

正式批进入补录阶段，重心转向：

1. **补录捡漏**：每天刷一遍目标公司校招页
2. **实习优先**：AI 应用开发实习岗学历卡得松，先拿一段实习再打春招
3. **央国企兜底**：银行科技岗、运营商研究院还在开

## 每日节奏

- 下午时段固定投 5 个，宁缺毋滥
- 笔试集中在周末，提前一天复习对应公司题库
`},{title:`卧推姿势纠正笔记`,tags:[`健身`],content:`# 问题

右肩前束酸，推完胸没感觉。

## 纠正

- 肩胛后缩下沉，全程贴紧凳面
- 杠铃下放到乳头连线，不是锁骨
- 握距加宽半拳，小臂垂直地面

下次训练重点感受上背收紧。`},{title:`每周复盘模板`,tags:[`模板`],content:`# 本周复盘（ 月 日 - 月 日）

## 数据
- 训练： 次 / 目标 4 次
- 睡眠平均： 小时
- 投递： 家，笔试 场，面试 场

## 做得好的

## 下周改一件事
`},{title:`快碳清单（练前练后）`,tags:[`健身`,`饮食`],content:`练前 30 分钟：香蕉 1 根 / 白面包 2 片
练后：米饭一碗 + 鸡胸 / 蛋白粉一勺

**别碰**：油条、蛋糕这种糖油混合物，练前吃会犯困。`}],l=[{company:`字节跳动`,position:`AI 应用开发实习生`,status:`面试`,appliedOffset:-18,note:`一面过了，二面约的下周三。一面问了 LangGraph 状态和 MCP 落地，讲解稿派上用场了`},{company:`腾讯`,position:`PCG 前端开发（校招）`,status:`笔试`,appliedOffset:-15,note:`笔试安排在周六上午，重点复习 JS 异步和手写题`},{company:`智谱 AI`,position:`Agent 平台开发（实习）`,status:`面试`,appliedOffset:-12,note:`HR 说团队在做法务 Agent，和我的 CloudAgent 经历对口，重点准备 Orchestrator-Worker 模式`},{company:`美团`,position:`大模型应用工程师（校招）`,status:`已投递`,appliedOffset:-9,note:`内推码已填，学长说两周内出结果`},{company:`阿里`,position:`通义实验室应用开发`,status:`笔试`,appliedOffset:-8,note:`笔试炸了算法最后一题，但前面选择题应该稳`},{company:`快手`,position:`AI 产品实习生`,status:`已投递`,appliedOffset:-6,note:``},{company:`商汤科技`,position:`Agent 应用开发（校招）`,status:`Offer`,appliedOffset:-20,note:`口头 Offer，薪资 15k×14，base 北京。等正式邮件，先拖着看字节结果`},{company:`百度`,position:`文心一言应用方向`,status:`未通过`,appliedOffset:-16,note:`二面挂，反馈是工程深度够但算法基础弱。数据结构要补`},{company:`小米`,position:`AIoT 应用开发实习`,status:`已投递`,appliedOffset:-3,note:`官网直投`},{company:`工商银行软开中心`,position:`金融科技岗（校招）`,status:`已投递`,appliedOffset:-2,note:`央国企兜底选项，笔试考行测 + 专业`}];async function u(){let n=await t(),r=[],i=(e,t)=>{r.push(n.put(e,t))};localStorage.setItem(`daily_schedule`,JSON.stringify(s));let u=[`notes`,`workouts`,`weights`,`jobs`,`prepTasks`,`meals`,`sleeps`,`routine`,`chats`],d=n.transaction(u,`readwrite`);for(let e of u)await d.objectStore(e).clear();await d.done,c.forEach((t,n)=>{i(`notes`,{id:e()+n,title:t.title,content:t.content,tags:t.tags,type:`note`,created_at:o(-10+n*2,20),updated_at:o(-Math.max(0,4-n),21),is_deleted:0})});for(let[t,n,r]of[[-11,`胸 + 三头`,`卧推终于找到胸发力的感觉了，60kg 做组`],[-10,`背 + 二头`,`高位下拉加到 50kg，背阔有感觉`],[-8,`腿 + 肩`,`深蹲 80kg 5×5，腿软了两天`],[-6,`有氧 + 核心`,`爬坡 30 分钟，心率控制在 140`],[-4,`胸 + 三头`,`按纠正笔记调了姿势，右肩不酸了`],[-3,`背 + 二头`,`状态一般，重量没加，容量补上了`],[-1,`腿 + 肩`,`深蹲加到 85kg，睡眠够了果然有劲`]])i(`workouts`,{id:e()+`w`+t,date:a(t),planLabel:n,feeling:r,createdAt:o(t,7,30)});for(let[t,n]of[[-13,72.5],[-10,72.1],[-8,71.8],[-6,71.6],[-4,71.2],[-2,70.9],[0,70.6]])i(`weights`,{id:e()+`kg`+t,date:a(t),kg:n});for(let[t,n,r]of[[-9,6.2,`tired`],[-8,7.1,`ok`],[-7,6.8,`ok`],[-6,7.5,`great`],[-5,6.5,`tired`],[-4,7.2,`ok`],[-3,7.8,`great`],[-2,7,`ok`],[-1,7.4,`great`]]){let s=o(t,6,20);i(`sleeps`,{id:e()+`s`+t,date:a(t),hours:n,bedAt:s-Math.round(n*36e5),wakeAt:s,feel:r,createdAt:s})}[[-4,`breakfast`,`鸡蛋 2 个 + 全麦面包 + 黑咖啡`,!0],[-4,`lunch`,`食堂：鸡腿饭（去皮）+ 青菜`,!0],[-4,`dinner`,`练后：米饭 + 鸡胸 + 西兰花`,!0],[-3,`breakfast`,`香蕉 + 白面包（练前快碳）`,!0],[-3,`lunch`,`麻辣烫（清汤，多菜少丸）`,!0],[-3,`dinner`,`牛肉面 + 卤蛋`,!0],[-2,`breakfast`,`鸡蛋灌饼（馋了）`,!1],[-2,`lunch`,`食堂：红烧排骨 + 米饭减半`,!0],[-2,`dinner`,`沙拉 + 鸡胸肉`,!0],[-1,`breakfast`,`鸡蛋 2 个 + 燕麦牛奶`,!0],[-1,`lunch`,`黄焖鸡米饭（小份）`,!1],[-1,`dinner`,`练后：米饭 + 鱼 + 青菜`,!0],[0,`breakfast`,`鸡蛋 2 个 + 全麦面包`,!0],[0,`lunch`,`食堂：番茄牛腩 + 米饭`,!0]].forEach(([t,n,r,s],c)=>{i(`meals`,{id:e()+`m`+c,date:a(t),slot:n,content:r,healthy:s,createdAt:o(t,n===`breakfast`?7:n===`lunch`?12:18,30)})});for(let t of l)i(`jobs`,{id:e()+`j`+t.company,company:t.company,position:t.position,status:t.status,appliedAt:o(t.appliedOffset,14),updatedAt:o(Math.min(0,t.appliedOffset+3),15),note:t.note});[[`DeepResearch 项目 STAR 复述稿`,!0],[`TCP / HTTP 八股过一遍`,!0],[`Vue3 响应式原理复盘`,!0],[`手写 Promise.all + 防抖节流`,!1],[`模拟面试录音回听一遍`,!1]].forEach(([t,n],r)=>{i(`prepTasks`,{id:e()+`p`+r,title:t,done:n,order:r})});let f=[];s.forEach(e=>e.items.forEach((t,n)=>f.push({blockId:e.id,itemIndex:n,item:t})));for(let[e,t]of Object.entries({[-6]:11,[-5]:14,[-4]:9,[-3]:15,[-2]:13,[-1]:12,0:8})){let n=Number(e);f.forEach((e,r)=>{if((r*7+Math.abs(n)*3)%f.length<t){let t=a(n);i(`routine`,{id:`${t}__${e.blockId}__${e.itemIndex}`,date:t,blockId:e.blockId,itemIndex:e.itemIndex,item:e.item,doneAt:o(n,8)+r*18e5})}})}i(`chats`,{id:e()+`chat1`,title:`这周训练状态怎么样`,createdAt:o(-2,21),updatedAt:o(-2,21,5),messages:[{role:`user`,content:`帮我看看这周的训练状态怎么样？`,timestamp:o(-2,21)},{role:`assistant`,content:`## 本周训练复盘

你这周打卡 **3 次**（胸、背、腿各一次），节奏符合计划。

**亮点**
- 深蹲加到 85kg，说明睡眠充足（周二 7.8 小时）对力量提升直接有效
- 卧推姿势纠正后肩膀不酸了，这个反馈很值得记住

**建议**
- 周三睡眠只有 6.5 小时且状态「困」，这类日子适合安排休息或轻有氧
- 体重两周降了 1.9kg，速度偏快，注意蛋白质别省`,timestamp:o(-2,21,1)}]}),i(`chats`,{id:e()+`chat2`,title:`字节二面怎么准备`,createdAt:o(-1,20),updatedAt:o(-1,20,8),messages:[{role:`user`,content:`字节二面下周三，帮我理一下准备重点`,timestamp:o(-1,20)},{role:`assistant`,content:`## 二面准备清单

二面通常深挖项目 + 场景设计，按优先级：

1. **DeepResearch 三板斧**：防注入探针、成本核算、chunk_size 消融——每个都要能扛三层追问
2. **场景题**：「设计一个支持 10 万用户的 Agent 平台」大概率会问，从 MCP 网关、任务队列、限流讲起
3. **手写题**：Promise 并发控制复习一遍

时间线里明后两天的下午时段，建议把「笔面试复盘」临时换成「字节面经专项」。`,timestamp:o(-1,20,2)}]}),await Promise.all(r)}export{u as n,r as t};