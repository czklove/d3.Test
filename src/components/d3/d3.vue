<template>
  <div class="d3">
    <div class="d3svg"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { no4jdata } from '../../api/XBno4japi.js';

export default {
  name: "d3",
  data() {
    return {
      nodes: [
        {
          name: "人工智能",
          id: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          url: null,
          level: 1,
          resource: 1,
          doi: null
        },
        {
          name: "模糊数学",
          id: "b757aeec-a6e1-42b6-b6c7-1e7271a60225",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "能源技术",
          id: "0772365b-efaa-418d-85c3-c19c1320974c",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "电脑",
          id: "bad47888-1a3a-441c-949c-5261bdd9757c",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "水环境监测评价与水华智能化预测方法及应急治理决策系统",
          id: "8eceb72f-7dab-4300-8005-2229f2a48cf4",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "西蒙",
          id: "bf1e93d2-69ac-42bb-ae0b-5cf99172b2fd",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "PROLOG语言",
          id: "55c3e34c-1c78-428a-998d-e4b6e1e7fa1a",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "机器人",
          id: "bc73430d-e84f-40f1-87f0-b23de2d7e75f",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "仿生学",
          id: "40554fb4-7ef6-4017-be7e-9e700d0714c9",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "语言处理",
          id: "013b39f8-89a0-4add-a046-6a09a55d9f01",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        },
        {
          name: "机器学习",
          id: "6c38e684-aa36-4c16-bec8-0fe58a5a35ee",
          url: null,
          level: 2,
          resource: 1,
          doi: null
        }
      ],
      links: [
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "b757aeec-a6e1-42b6-b6c7-1e7271a60225",
          rela: "动作行为-途径方法",
          weight: 2,
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "0772365b-efaa-418d-85c3-c19c1320974c",
          rela: "同类并列",
          weight: 1,
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "bad47888-1a3a-441c-949c-5261bdd9757c",
          rela: "领域-内容",
          weight: 3
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "8eceb72f-7dab-4300-8005-2229f2a48cf4",
          rela: "主题词",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "bf1e93d2-69ac-42bb-ae0b-5cf99172b2fd",
          rela: "对象-主体",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "55c3e34c-1c78-428a-998d-e4b6e1e7fa1a",
          rela: "领域-内容",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "bc73430d-e84f-40f1-87f0-b23de2d7e75f",
          rela: "对象-主体",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "40554fb4-7ef6-4017-be7e-9e700d0714c9",
          rela: "内容-领域",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "013b39f8-89a0-4add-a046-6a09a55d9f01",
          rela: "领域-内容",
          weight: 1
        },
        {
          source: "50b330c9-07ef-4ef2-ad53-81c2e2288137",
          target: "6c38e684-aa36-4c16-bec8-0fe58a5a35ee",
          rela: "领域-内容",
          weight: 1
        }
      ],
      width: 1160,
      height: 675,
      svg: {},
      simulation: {},
      //初始节点背景颜色，字体颜色
      cscolor: '#07e1b5',
      //资源背景颜色，字体颜色(目前都统一白色) 
      zycolor:['#4157d7', '#098aeb', '#14c3db'],
      //字体颜色(目前都统一白色)
      zyfontcolor: ['#2966eb', '', ''],
      //相关节点的背景图，随机读取
      colors: ['#ec743b', '#ef883c', '#efb33c', '#ef883c'],
      fontcolors: ['#fff', '#fff', '#fff', '#fff'],
      // 根据节点划出来的线
      linksLine: {

      },
      // 节点
      nodesCic: {

      },
      // 节点
      nodesTitle: {

      },// 节点
      edges_text: {

      },
      chaxuntext: '北京',
      config: {
        keyword: '',
        level: 1,
        guid: ''
      },
      timeoutID: {

      }
    };
  },
  mounted() {    
    this.loaddata();
  },
  methods: {
    async loaddata() {
      let _self = this
      var res = await no4jdata (_self.config)
      if(res.Success) {
        if (_self.config.level == 1) {
          // 初始化
          _self.nodes = res.nodes
          _self.links = res.links
          console.log(res.nodes)
        } else {
          // 更新          
          var Isaddnode = false
          res.nodes.forEach(function (node) {
            // 去重复
            var filternodes = _self.nodes.filter((p)=>{
              return p.id == node.id
            })
            if (!filternodes || filternodes.length == 0) {
              if (!Isaddnode) {
                Isaddnode = true
              }
              _self.nodes.push(node)
            } else {
              res.links.forEach(function (link) {
                if (link.source == node.id) {
                  link.source = filternodes[0].id
                }
              })
            }
          })
          console.log(res.nodes)
          // 没有需要更新的节点
          if (!Isaddnode) {
            alert("暂未有需要更新的节点")
          }
          // 后台传过来的连接线需二次处理
          res.links.forEach(function (e) {
            let sourceNode = _self.nodes.filter(function (n) {                
                return n.id === e.source
            })[0];

            let targetNode = _self.nodes.filter(function (n) {
                return n.id === e.target;              
            })[0];
            e.source = sourceNode
            e.target = targetNode
          })
          _self.links = _self.links.concat(res.links)
          _self.update ()
          return
        }
      }
      _self.links.forEach(function (e) {
        let sourceNode = _self.nodes.filter(function (n) {                
            return n.id === e.source
        })[0];

        let targetNode = _self.nodes.filter(function (n) {
            return n.id === e.target;              
        })[0];
        e.source = sourceNode
        e.target = targetNode
      })
      if (_self.config.level == 1) {     
        _self.svg = d3
          .select(".d3svg")
          .append("svg")
          .attr("width", _self.width)
          .attr("height", _self.height)
        // 通过布局来转换数据，然后进行绘制
        _self.simulation = d3.forceSimulation(_self.nodes)
          .force("link", d3.forceLink(_self.links).distance((d)=>{
            // 新增节点权重关系，值越大代表关系越密切
            let wd = 175
            if (d<5) {
              return (1-(d.weight-1)*0.2)*wd  // 权重没增加1，则连接点短20%
            } else {
              return 0.2*wd
            }
          }))
          .force("charge", d3.forceManyBody().strength(-750))
          //.force("collide", d3.forceCollide().strength(-550))
          .force("center", d3.forceCenter(_self.width / 2, _self.height / 2));
      }
      _self.linksLine = _self.svg.append("g").selectAll('.lines')
                .data(_self.links)
                .enter()
                .append('line')
                .attr("class", "lines")
                .style('stroke', function (node) {
                    if (node.target.resource != 1) {
                        return _self.cscolor
                    }
                    else
                    {
                        return "#ccc"
                    }
                })
                .style('stroke-width', 2)
      _self.nodesCic = _self.svg.append("g").selectAll('.circles')
                .data(_self.nodes)
                .enter()
                .append('circle')
                .attr("class", "circles")               
                .style("fill", function (node) {
                  var color
                  //背景颜色
                  if (node.level == 1) {
                    color = _self.cscolor
                  } else {
                    if (node.resource == 1) {
                        color = _self.colors[(node.level - 1) % 4]
                    } else {
                        color = _self.zycolor[(node.resource - 2)]// 资源颜色
                    }
                  }
                  return color
                })               
                .style('stroke', function (node) { //
                    var color;//圆圈边框的颜色
                    if (node.name == _self.chaxuntext) {
                        color = "none"
                    } else {
                        color = "none"
                    }
                    return color
                })
                .style('cursor', "pointer")
                .attr("r", function (node) {
                    var r;//圆圈大小  
                    if (node.resource == 1) {
                        if (node.level == 1) {
                            r = "50"
                        } else {
                            r = "38"
                        }
                    } else {
                        r = "50"
                    }
                    return r;
                }).on("click", function (node) {
                    
                    node.fixed = true;
                    //simulation = simulation.force("center", d3.forceCenter(node.x, node.y));
                    //单击时间暂缓，如果发生双击事件则把暂缓的单击时间去掉
                    clearTimeout(_self.timeoutID);
                    _self.timeoutID = window.setTimeout(function () {
                        _self.config = {
                          keyword: node.name,
                          level: node.level,
                          guid: node.id
                        }
                        _self.loaddata()              
                    }, 200);
                })
                .on("dblclick", function (d) {                    
                    //双击节点时节点恢复拖拽
                    //d.fixed = false;
                    //alert(d.name);
                    clearTimeout(_self.timeoutID);
                    if (d.level != 0) {
                        _self.config = {
                          keyword: d.name,
                          level: 1,
                          guid: ''
                        }
                        d3.select("svg").remove();
                        //d3.select(".tooltip").remove();
                        _self.loaddata();
                    }
                })
                .call(d3.drag()
                        .on("start", _self.dragstarted)
                        .on("drag", _self.dragged)
                        .on("end", _self.dragended));

        //给节点添加名称
        _self.nodesTitle = _self.svg.append("g").selectAll('.nodetext')
                .data(_self.nodes)
                .enter()
                .append('text')
                .attr("font-size", function (d) {
                    if (d.level==1) {
                        return 'ft16'
                    }
                    // console.log(d.name+"---"+ d.name.length);
                    var re_en = /[a-zA-Z]+/g
                    //如果是全英文，不换行
                    if (d.name.match(re_en)) {
                        d3.select(this).append('tspan')//添加tspan用来方便时使用绝对或相对坐标来调整文本
                                .attr('x', 0)
                                .attr('y', 2)
                                .text(function () { return d.name; });
                    }
                        //如果小于8个字符，不换行
                    else if (d.name.length <= 6) {
                        return 'ft14'
                    }
                    else {//8-16字符分两行显示
                        return 'ft12'
                    }
                })
                .style("fill", "#fff")
                .attr("class", "nodetext")
                .attr("text-anchor", "middle") //是的文字居中显示在节点上
                .attr('x', function (d) {
                    if (d.name.length <= 8) {
                        d3.select(this).append('tspan')
                                .attr('x', 0)
                                .attr('y', 2)
                                .text(function () { return d.name; });
                    } else if (d.name.length >= 16) {//大于16个字符时，将14个字后的内容显示为。。。
                        var top = d.name.substring(0, 8);
                        var bot = d.name.substring(8, 16) + "...";

                        d3.select(this).text(function () { return ''; })

                        d3.select(this).append('tspan')//前n个字
                                .attr('x', 0)
                                .attr('y', -7)
                                .text(function () { return top; })

                        d3.select(this).append('tspan')//后n个字
                                .attr('x', 0)
                                .attr('y', 10)
                                .text(function () { return bot; })

                    }
                    else {//8-16字符分两行显示
                        var top = d.name.substring(0, 8)
                        var bot = d.name.substring(8, d.name.length)

                        d3.select(this).text(function () { return ''; })

                        d3.select(this).append('tspan')
                                .attr('x', 0)
                                .attr('y', -7)
                                .text(function () { return top; })

                        d3.select(this).append('tspan')
                                .attr('x', 0)
                                .attr('y', 10)
                                .text(function () { return bot; })
                    }

                });
        //连线上的文字
        _self.edges_text = _self.svg.append("g").selectAll(".edgelabel")
                .data(_self.links)
                .enter()
                .append("text")//添加text标签
                .attr("font-size", "ft12")
                .text(function (d) { return d.rela; })
                .attr('class', 'edgelabel')
                .attr('id', function (d, i) { return 'edgepath' + i; })
                .attr('dx', '60')
                .attr('dy', '0')
        _self.simulation.on("tick", _self.draw)
    },
    draw() {
      //	更新连线的坐标
      this.linksLine
        .attr("x1", function(d) {
          return d.source.x
        })
        .attr("y1", function(d) {
          return d.source.y
        })
        .attr("x2", function(d) {
          return d.target.x
        })
        .attr("y2", function(d) {
          return d.target.y
        });

      //	更新节点坐标
      this.nodesCic
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });

      //	更新文字坐标
      this.nodesTitle.attr("transform", this.transform1); //顶点文字

      this.edges_text
        .attr("dx", function(d) {
          return (d.target.x + d.source.x) / 2 - 10;
          //设置文字一直显示在线的中间
        })
        .attr("dy", function(d) {
          return (d.target.y + d.source.y) / 2 - 5;
          //设置文字一直显示在线的中间
        });
    },
    //设置圆圈和文字的坐标
    transform1(d) {
      return "translate(" + d.x + "," + d.y + ")";
    },
    /**
     * 节点（开始）拖拽事件
     */
    dragstarted(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    },
    /**
     * 节点拖拽事件
     */
    dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    },
    /**
     * 节点（结束）拖拽事件
     */
    dragended(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    },
    update () {
      // 更新连线 links 
      let _self = this              
      _self.linksLine = _self.linksLine.data(_self.links, (d) => {
        if (d && d.source && d.target) {
          return d.source.id + "-" + d.target.id;
        }
      });
      _self.linksLine = _self.linksLine.enter()
              .append("line")
              .style("stroke", function (node) {
                  if (node.target.resource != 1) {
                      return _self.cscolor;
                  }
                  else {
                      return "#ccc";
                  }
              })
              .attr("class", "lines")
              .style("stroke-width", 2)
              .merge(_self.linksLine);                
      _self.nodesCic = _self.nodesCic.data(_self.nodes, (d) => { return d.id; });
      _self.nodesCic = _self.nodesCic.enter()
              .append("circle")
              .attr("class", "circles")
              .attr("r", function (node) {
                  var r;//圆圈背景色  
                  if (node.resource == 1) {
                      if (node.level == 1) {
                          r = "50";
                      } else {
                          r = "38";
                      }
                  } else {
                      r = "50";
                  }
                  return r;
              })
              .style("fill", function (node) {
                var color
                  //背景颜色
                  if (node.level == 1) {
                      color = _self.cscolor;
                  } else {
                      if (node.resource == 1) {
                          color = _self.colors[(node.level-1)%4];
                      } else {
                          color = _self.zycolor[(node.resource - 2)];//资源颜色
                      }
                  }
                  return color;
              })
              .style('stroke', function (node) { //
                  var color;//圆圈边框的颜色
                  if (node.name == _self.chaxuntext) {
                      color = "none";
                  } else {
                      color = "none";
                  }
                  return color;
              })
              //.style('opacity', "0.9")
              .on("click", function (node) {
                  node.fixed = true;
                    //simulation = simulation.force("center", d3.forceCenter(node.x, node.y));
                    //单击时间暂缓，如果发生双击事件则把暂缓的单击时间去掉
                    clearTimeout(_self.timeoutID);
                    _self.timeoutID = window.setTimeout(function () {
                        _self.config = {
                          keyword: node.name,
                          level: node.level,
                          guid: node.id
                        }
                        _self.loaddata()              
                    }, 200);
              })
              .on("dblclick", function (d) {
                //双击节点时节点恢复拖拽
                //d.fixed = false;
                //alert(d.name);
                clearTimeout(_self.timeoutID);
                if (d.level != 0) {
                    _self.config = {
                      keyword: d.name,
                      level: 1,
                      guid: ''
                    }
                    d3.select("svg").remove();
                    //d3.select(".tooltip").remove();
                    _self.loaddata();
                }
              })
              .merge(_self.nodesCic).call(d3.drag()
                      .on("start", _self.dragstarted)
                      .on("drag", _self.dragged)
                      .on("end", _self.dragended));

      //节点描述
      _self.nodesTitle = _self.nodesTitle.data(_self.nodes, (d) => d.id);
      _self.nodesTitle = _self.nodesTitle.enter()
              .append("text")
              .style("fill", "#fff")
              .attr("class", "nodetext")
              .attr("text-anchor", "middle")//在圆圈中加上数据
              .attr("font-size", function (d) {
                  if (d.level==1) {
                      return 'ft16';
                  }
                  // console.log(d.name+"---"+ d.name.length);
                  var re_en = /[a-zA-Z]+/g;
                  //如果是全英文，不换行
                  if (d.name.match(re_en)) {
                      d3.select(this).append('tspan')//添加tspan用来方便时使用绝对或相对坐标来调整文本
                              .attr('x', 0)
                              .attr('y', 2)
                              .text(function () { return d.name; });
                  }
                      //如果小于8个字符，不换行
                  else if (d.name.length <= 6) {
                      return 'ft14';
                  }
                  else {//8-16字符分两行显示
                      return 'ft12';
                  }
              })
              .attr('x', function (d) {
                  if (d.name.length <= 8) {
                      d3.select(this).append('tspan')
                              .attr('x', 0)
                              .attr('y', 2)
                              .text(function () { return d.name; });
                  } else if (d.name.length >= 16) {//大于16个字符时，将14个字后的内容显示为。。。
                      var top = d.name.substring(0, 8);
                      var bot = d.name.substring(8, 16) + "...";

                      d3.select(this).text(function () { return ''; });

                      d3.select(this).append('tspan')//前n个字
                              .attr('x', 0)
                              .attr('y', -7)
                              .text(function () { return top; });

                      d3.select(this).append('tspan')//后n个字
                              .attr('x', 0)
                              .attr('y', 10)
                              .text(function () { return bot; });

                  }
                  else {//8-16字符分两行显示
                      var top = d.name.substring(0, 8);
                      var bot = d.name.substring(8, d.name.length);

                      d3.select(this).text(function () { return ''; });

                      d3.select(this).append('tspan')
                              .attr('x', 0)
                              .attr('y', -7)
                              .text(function () { return top; });

                      d3.select(this).append('tspan')
                              .attr('x', 0)
                              .attr('y', 10)
                              .text(function () { return bot; });
                  }

              }).merge(_self.nodesTitle);
      _self.edges_text = _self.edges_text.data(_self.links, (d) => { return d.source.id + "-" + d.target.id; });
      _self.edges_text = _self.edges_text.enter()
                  .append("text")//添加text标签
                  .text(function (d) { return d.rela; })
                  .attr('class', 'edgelabel').merge(_self.edges_text)
                  //.attr('id', function (d, i) { return 'edgepath' + i; })
      // svg_text = svg_text.data()
      // Update and restart the simulation.
      _self.simulation.nodes(_self.nodes);
      _self.simulation.force("link").links(_self.links);
      _self.simulation.alpha(0.5).restart();
      // 鼠标滚轮缩放
      _self.svg.call(d3.zoom().on("zoom", function () {
          /*
            * node.attr("transform",d3.event.transform);
            * link.attr("transform",d3.event.transform);
            * linktext.attr("transform",d3.event.transform);
            * nodetext.attr("transform",d3.event.transform);
            */
         _self.svg.selectAll("g").attr("transform", d3.event.transform);
      }));
      _self.svg.on("dblclick.zoom", null); // 静止双击缩放
    }
  }
}
</script>

<style lang="less">
</style>