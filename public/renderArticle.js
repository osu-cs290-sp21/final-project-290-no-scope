(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"article\">\n  \n  <div class=\"article-content\">\n    <h1 class=\"article-title\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":17}}}) : helper)))
    + "\n    </h1>\n\n    <p class=\"article-author\">\n      <a href=\"#\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":20}}}) : helper)))
    + "</a>\n    </p>\n\n    <p class=\"article-markdown\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"markdown") || (depth0 != null ? lookupProperty(depth0,"markdown") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"markdown","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":18}}}) : helper)))
    + "\n    </p>\n    \n    \n  </div>\n</article>\n<!-- Need to pull post data from a database, not a JSON like with assignment 5.\n    This file represents the article previews that will populate the home page -->";
},"useData":true});
})();