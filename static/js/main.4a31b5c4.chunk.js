(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=a(6),s=a(14),i=(a(48),a(10)),m=a(4),u=a.n(m),p=a(15),d=a(16),E=a.n(d),v=function(e){var t=/\/(\d+)\//.exec(e);if(null!=t)return t[1]},f={kanto:{start:1,end:151},johto:{start:152,end:251},hoenn:{start:252,end:386},sinnoh:{start:387,end:493},unova:{start:494,end:649},kalos:{start:650,end:721},alola:{start:722,end:807}},g=function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(),t.next=4,E.a.get("\n\t\t\thttps://pokeapi.co/api/v2/pokemon-species/".concat(e));case 4:return n=t.sent,t.next=7,n.data;case 7:r=t.sent,a({type:"GET_POKEMON_SPECIES",payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"POKEMON_ERROR",payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(e){e({type:"SET_LOADING"})}},h=function(){return function(e){e({type:"CLEAR_FILTER"})}},k=Object(i.b)((function(e){return{filtered_pokemons:e.pokemons.filtered_pokemons}}),{filterPokemons:function(e){return function(t){t({type:"FILTER_POKEMONS",payload:e})}},clearFilter:h})((function(e){var t=e.filterPokemons,a=e.clearFilter,l=e.filtered_pokemons,o=Object(n.useRef)("");Object(n.useEffect)((function(){null===l&&(o.current.value="")}));return r.a.createElement("input",{type:"search",ref:o,"aria-label":"Filter Pokemons...",placeholder:"Filter Pokemons....",className:"form-control mr-sm-2 my-2",onChange:function(e){""!==o.current.value?t(e.target.value):a()}})})),y=Object(i.b)((function(e){return{pokemons:e.pokemons}}),{getRegionalPokemons:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(b()),n=f[e],t.next=5,E.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(n.end-n.start+1,"&offset=").concat(n.start-1));case 5:return r=t.sent,t.next=8,r.data;case 8:l=t.sent,a({type:"GET_REGIONAL_POKEMONS",payload:l}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"POKEMON_ERROR",payload:t.t0});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},clearRegionalPokemons:function(){return{type:"CLEAR_REGIONAL_POKEMONS"}},clearFilter:h})((function(e){e.pokemons;var t=e.getRegionalPokemons,a=e.clearRegionalPokemons,n=e.clearFilter;return r.a.createElement("select",{className:"custom-select my-2",onChange:function(e){"default"===e.target.value?a():(n(),t(e.target.value))}},r.a.createElement("option",{value:"default"},"Select Region"),r.a.createElement("option",{value:"kanto"},"Kanto"),r.a.createElement("option",{value:"johto"},"Johto"),r.a.createElement("option",{value:"hoenn"},"Hoenn"),r.a.createElement("option",{value:"sinnoh"},"Sinnoh"),r.a.createElement("option",{value:"unova"},"Unova"),r.a.createElement("option",{value:"kalos"},"Kalos"),r.a.createElement("option",{value:"alola"},"Alola"))})),x=Object(s.f)((function(e){var t=e.location;return r.a.createElement("nav",{className:"navbar  sticky-top mb-5"},r.a.createElement(c.b,{to:"/",className:"navbar-brand mb-0 mx-auto poke-font",style:{fontSize:"30px"}},"Pokedex"),!t.pathname.startsWith("/pokemon")&&r.a.createElement("form",{action:"",className:"form-inline"},r.a.createElement(k,null),r.a.createElement(y,null)))})),_=a(13),N=a(38),O=a(39),w=a(40);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j={pokemons:[],filtered_pokemons:null,regional_pokemons:null,current_pokemon:null,current_pokemon_species:null,loading:!0,error:null},M=Object(_.combineReducers)({pokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FIRST_POKEMONS":return R({},e,{pokemons:t.payload.results,loading:!1});case"GET_MORE_POKEMONS":return R({},e,{pokemons:e.pokemons.concat(t.payload.results),loading:!1});case"GET_REGIONAL_POKEMONS":return R({},e,{regional_pokemons:t.payload.results,loading:!1});case"CLEAR_REGIONAL_POKEMONS":return R({},e,{regional_pokemons:null});case"GET_POKEMON_DETAIL":return R({},e,{current_pokemon:t.payload,loading:!1});case"GET_POKEMON_SPECIES":return R({},e,{current_pokemon_species:t.payload,loading:!1});case"SET_LOADING":return R({},e,{loading:!0});case"CLEAR_CURRENT":return R({},e,{current_pokemon:null,current_pokemon_species:null});case"POKEMON_ERROR":return console.log(t.payload),R({},e,{error:t.payload});case"FILTER_POKEMONS":return R({},e,{filtered_pokemons:e.regional_pokemons?e.regional_pokemons.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.name.match(a)})):e.pokemons.filter((function(e){var a=new RegExp("".concat(t.payload),"gi");return e.name.match(a)}))});case"CLEAR_FILTER":return R({},e,{filtered_pokemons:null});default:return e}}}),S=[O.a],F=Object(_.createStore)(M,{},Object(N.composeWithDevTools)(_.applyMiddleware.apply(void 0,S))),L=a(41),T=a.n(L),A={width:"3rem",height:"3rem",color:"#FFDE00"},C=function(){return r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status",style:A},r.a.createElement("span",{class:"sr-only"},"Loading...")))},K={width:"160px",height:"160px",backgroundColor:"#3B4CCA",margin:"5px"},I=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"card m-auto flex-fill align-items-center",style:K},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(v(t.url),".png"),className:"card-img-top pokeimg",alt:t.name}),r.a.createElement(c.b,{to:"/pokemon/".concat(v(t.url)),className:"card-title h4 text-capitalize"},t.name))},G=a(2),D=a.n(G),z=Object(i.b)((function(e){return{pokemons:e.pokemons}}),{getFirstPokemons:function(){return function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(b()),e.next=4,E.a.get("https://pokeapi.co/api/v2/pokemon?limit=100");case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,t({type:"GET_FIRST_POKEMONS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"POKEMON_ERROR",payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},getMorePokemons:function(){return function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a().pokemons.pokemons.length,e.next=4,E.a.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=".concat(n));case 4:return r=e.sent,e.next=7,r.data;case 7:l=e.sent,t({type:"GET_MORE_POKEMONS",payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"POKEMON_ERROR",payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()}})((function(e){var t=e.getFirstPokemons,a=e.getMorePokemons,l=e.pokemons,o=l.loading,c=l.pokemons,s=l.filtered_pokemons,i=l.regional_pokemons;return Object(n.useEffect)((function(){t()}),[]),o?r.a.createElement(C,null):null!==s?r.a.createElement("div",{className:"card-group d-flex align-items-center py-4"},s.map((function(e){return r.a.createElement(I,{key:D.a.v4(),pokemon:e})}))):null!==i?r.a.createElement("div",{className:"card-group d-flex align-items-center py-4"},i.map((function(e){return r.a.createElement(I,{key:D.a.v4(),pokemon:e})}))):null!==c&&0!==c.length?r.a.createElement(T.a,{dataLength:c.length,next:a,hasMore:!0,loader:r.a.createElement("h4",{className:"text-center"},"Loading...."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},r.a.createElement("div",{className:"card-group d-flex align-items-center py-4"},c.map((function(e){return r.a.createElement(I,{key:D.a.v4(),pokemon:e})})))):r.a.createElement("h1",null,"No Results Found")})),U=function(e){var t=e.types;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card p-3"},r.a.createElement("h5",{className:"card-title mx-auto"},"Type"),r.a.createElement("div",{className:"container d-flex align-items-center"},t.map((function(e){return r.a.createElement("span",{key:D.a.v4(),className:"text-capitalize text-white mx-auto btn type-".concat(e.type.name)},e.type.name)})))))},W=function(e){var t=e.stats;return r.a.createElement("div",{className:"card p-3 "},r.a.createElement("h5",{className:"card-title mx-auto"},"Stats"),r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:D.a.v4()},r.a.createElement("th",null,r.a.createElement("span",{className:"progress-label text-capitalize"}," ",e.stat.name)),r.a.createElement("td",{style:{width:"60%"}},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped stat-".concat(e.stat.name," "),role:"progressbar",style:{width:"".concat(e.base_stat/180*100,"%")},"aria-valuenow":e.base_stat,"aria-valuemin":"0","aria-valuemax":"180"}),r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-danger",role:"progressbar",style:{width:"".concat((180-e.base_stat)/180*100,"%")},"aria-valuenow":180-e.base_stat%180,"aria-valuemin":"0","aria-valuemax":"180"}))))})))))},B=function(e){var t=e.abilities;return r.a.createElement("div",{className:"card p-3"},r.a.createElement("h5",{className:"card-title mx-auto"},"Abilities"),r.a.createElement("div",{className:"container d-flex align-items-center text-capitalize"},t.map((function(e){return r.a.createElement("span",{key:D.a.v4(),className:"btn btn btn-primary mx-auto"},e.ability.name)}))))},H=function(e){var t=e.bio,a=t.height,n=t.weight,l=t.gender_rate,o=t.capture_rate;return r.a.createElement("div",{className:"card p-3 "},r.a.createElement("h5",{className:"card-title text-center"},"Bio"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-borderless text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Height"),r.a.createElement("th",null,"Weight"),r.a.createElement("th",null,"Gender Rate"),r.a.createElement("th",null,"Capture Rate"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"".concat(a/10," m")),r.a.createElement("td",null,"".concat(Math.floor(a/10*39.37/12),"' ").concat(Math.floor(a/10*39.37%12),"''")))))),r.a.createElement("td",null,r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"".concat(n/10," kg")),r.a.createElement("td",null,"".concat((n/10*2.205).toFixed(2)," lbs")))))),r.a.createElement("td",null,-1!==l?r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-primary",role:"progressbar",style:{width:"".concat(12.5*(8-l),"%")},"aria-valuenow":8-l,"aria-valuemin":"-1","aria-valuemax":"8"}),r.a.createElement("div",{className:"progress-bar  progress-bar-striped stat-speed",role:"progressbar",style:{width:"".concat(12.5*l,"%")},"aria-valuenow":l,"aria-valuemin":"-1","aria-valuemax":"8"})):r.a.createElement("span",null,"Gender Unknown")),r.a.createElement("td",null,r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped ",role:"progressbar",style:{width:"".concat(o/255*100,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":"255"},"".concat(Math.floor(o/255*100),"%")),r.a.createElement("div",{className:"progress-bar progress-bar-animated progress-bar-striped bg-danger",role:"progressbar",style:{width:"".concat((255-o)/255*100,"%")},"aria-valuenow":255-o,"aria-valuemin":"0","aria-valuemax":"255"},"".concat(Math.floor((255-o)/255*100),"%"))))))))))},J=function(e){var t=e.moves;return(t=t.filter((function(e){return 0!==e.version_group_details[0].level_learned_at}))).sort((function(e,t){return e.version_group_details[0].level_learned_at-t.version_group_details[0].level_learned_at})),r.a.createElement("div",{className:"card p-3 "},r.a.createElement("h5",{className:"card-title mx-auto"},"Moves"),r.a.createElement("table",{className:"table table-striped table-hover table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Level"),r.a.createElement("th",null,"Move"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:D.a.v4()},r.a.createElement("th",{className:" text-capitalize"},e.move.name),r.a.createElement("td",null,e.version_group_details[0].level_learned_at))})))))},Y={width:"160px",height:"160px",maxWidth:"160px",maxHeight:"160px"},q=function(e){var t=e.varieties;return t=t.filter((function(e){return!1===e.is_default})),r.a.createElement("div",{className:"card-group d-flex align-items-center"},t.map((function(e){var t=v(e.pokemon.url);return r.a.createElement("div",{key:t,className:"card rounded-circle align-items-center my-4 mx-auto",style:Y},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),onError:function(e){e.target.onerror=null,e.target.src="https://ih1.redbubble.net/image.731955024.9007/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"},alt:e.pokemon.name,className:"card-img-top pokeimg "}),r.a.createElement(c.b,{className:"card-title h5 text-capitalize text-center",to:"/pokemon/".concat(t)},e.pokemon.name))})))},Q=a(42),V={width:"160px",height:"160px",maxWidth:"160px",maxHeight:"160px"},X=function(e){var t=e.evolutionURL,a=Object(n.useState)(null),l=Object(Q.a)(a,2),o=l[0],s=l[1],i=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(t);case 2:return a=e.sent,e.next=5,a.data;case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){i(t)}),[t]),null===o)return r.a.createElement(C,null);var m=[o.chain];return 0!==m[0].evolves_to.length&&(m[0].evolves_to.forEach((function(e){m.push(e)})),0!==m[1].evolves_to.length&&m[1].evolves_to.forEach((function(e){m.push(e)}))),r.a.createElement(n.Fragment,null,r.a.createElement("h5",{className:"text-center p-3",style:{backgroundColor:"#3B4CCA",color:"#fff",margin:"0"}},"Evolution"),r.a.createElement("div",{className:"card-group p-4"},m.map((function(e){var t=e.species,a=t.name,n=t.url;return r.a.createElement("div",{className:"card rounded-circle align-items-center  my-4 mx-auto",style:V,key:D.a.v4()},r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(v(n),".png"),className:"card-img-top pokeimg ",alt:a}),r.a.createElement(c.b,{to:"/pokemon/".concat(v(n)),className:"card-title h4 text-capitalize"},a))}))))},Z=Object(i.b)((function(e){return{pokemons:e.pokemons}}),{getPokemonDetail:function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(),t.next=4,E.a.get("\n\t\t\thttps://pokeapi.co/api/v2/pokemon/".concat(e));case 4:return n=t.sent,t.next=7,n.data;case 7:r=t.sent,a({type:"GET_POKEMON_DETAIL",payload:r}),l=v(r.species.url),a(g(l)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:"POKEMON_ERROR",payload:t.t0});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},getPokemonSpecies:g,clearCurrent:function(){return function(e){e({type:"CLEAR_CURRENT"})}}})((function(e){var t=e.clearCurrent,a=e.getPokemonDetail,l=e.pokemons,o=e.match,s=Number(o.params.id);Object(n.useEffect)((function(){t(),a(s)}),[o]);var i=l.loading,m=l.current_pokemon,u=l.current_pokemon_species;if(null===m||null===u||i)return r.a.createElement(C,null);var p=m.id,d=m.name,E=m.types,v=m.stats,f=m.height,g=m.weight,b=m.abilities,h=m.moves,k=u.flavor_text_entries,y=u.capture_rate,x=u.gender_rate,_=u.varieties,N=u.evolution_chain,O={height:f,weight:g,capture_rate:y,gender_rate:x};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"card align-items-center"},r.a.createElement(q,{varieties:_}),r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(p,".png"),onError:function(e){e.target.onerror=null,e.target.src="https://ih1.redbubble.net/image.731955024.9007/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"},alt:d,className:"card-img-top pokeimg"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title text-center text-capitalize"},d),r.a.createElement("p",{className:"card-text poke-desc"},"en"===k[1].language.name?k[1].flavor_text:k[2].flavor_text))),r.a.createElement(c.b,{className:"carousel-control-prev",style:{color:"#FFDE00",fontSize:"2rem"},to:"/pokemon/".concat(s-1),role:"button","data-slide":"prev"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement(c.b,{className:"carousel-control-next",style:{color:"#FFDE00",fontSize:"2rem"},to:"/pokemon/".concat(s+1),role:"button","data-slide":"next"},r.a.createElement("i",{className:"fas fa-chevron-right"}))),r.a.createElement(X,{evolutionURL:N.url}),r.a.createElement(B,{key:D.a.v4(),abilities:b}),r.a.createElement(H,{key:D.a.v4(),bio:O}),r.a.createElement(U,{key:D.a.v4(),types:E}),r.a.createElement(W,{key:D.a.v4(),stats:v}),r.a.createElement(J,{key:D.a.v4(),moves:h}))}));var $=function(){return r.a.createElement(i.a,{store:F},r.a.createElement(c.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:z}),r.a.createElement(s.a,{exact:!0,path:"/pokemon/:id",component:Z}))))))};o.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4a31b5c4.chunk.js.map