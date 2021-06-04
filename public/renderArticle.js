(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<article class=\"article\">\r\n  \r\n  <div class=\"article-content\">\r\n    <h1 class=\"article-title\">\r\n        "
    + alias5(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":17}}}) : helper)))
    + "\r\n    </h1>\r\n\r\n    <p class=\"article-author\">\r\n      <a href=\"#\">\r\n          "
    + alias5(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":20}}}) : helper)))
    + "</a>\r\n    </p>\r\n\r\n    <p class=\"article-markdown\">\r\n      "
    + alias5(((helper = (helper = helpers.markdown || (depth0 != null ? depth0.markdown : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"markdown","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":18}}}) : helper)))
    + "\r\n    </p>\r\n    \r\n    \r\n  </div>\r\n</article>\r\n<!-- Need to pull post data from a database, not a JSON like with assignment 5.\r\n    This file represents the article previews that will populate the home page -->";
},"useData":true});
})();