<%@ Control Language="C#" AutoEventWireup="true" EnableViewState="false" Inherits="BlogEngine.Core.Web.Controls.PostViewBase" %>
<%@ Import Namespace="BlogEngine.Core" %>
<article class="post" id="post<%=Index %>">
    <header class="post-header">
        <% if (Location == BlogEngine.Core.ServingLocation.SinglePost)
       {%>
        <div class="post-info clearfix head-localtion">
            <a href="<%=Utils.AbsoluteWebRoot%>">首页</a> >>
            <%=CategoryLinks(", ") %>
        </div>
        <%} %>
        
        <h2 class="post-title">
            <a href="<%=Post.RelativeOrAbsoluteLink %>" target="_blank"><%=Server.HtmlEncode(Post.Title) %></a>
        </h2>
        <div class="post-info clearfix">
            <span class="post-date"><i class="glyphicon glyphicon-calendar"></i><%=Post.DateCreated.ToString("d. MMMM yyyy") %></span>
            <span class="post-author"><i class="glyphicon glyphicon-user"></i><a href="<%=Utils.AbsoluteWebRoot + "author/" + Utils.RemoveIllegalCharacters(Post.Author)+ BlogConfig.FileExtension %>"><%=Post.AuthorProfile != null ? Utils.RemoveIllegalCharacters(Post.AuthorProfile.DisplayName) : Utils.RemoveIllegalCharacters(Post.Author) %></a></span>
            <span class="post-category"><i class="glyphicon glyphicon-folder-close"></i><%=CategoryLinks(", ") %></span>
            <a rel="nofollow" class="pull-right post-comment-link" href="<%=Post.RelativeOrAbsoluteLink %>#comment"><i class="glyphicon glyphicon-comment"></i>(<%=Post.ApprovedComments.Count %>)</a>
        </div>
    </header>
    <section class="post-body text">
        <asp:PlaceHolder ID="BodyContent" runat="server" />
    </section>

    <% if (Location == BlogEngine.Core.ServingLocation.SinglePost)
       {%>
    <footer class="post-footer">
        <div class="post-tags">
            <%=Resources.labels.tags %> : <%=TagLinks(", ") %>
        </div>
        <div class="post-rating">
            <%=Rating %>
        </div>
    </footer>
    <div class="ds-share" data-thread-key="<%= Post.Id %>" data-title="<%= Post.Title %>" data-images="" data-content="" data-url="<%= Post.PermaLink %>">
        <div class="ds-share-inline">
          <ul  class="ds-share-icons-16">
      	    <li data-toggle="ds-share-icons-more"><a class="ds-more" href="javascript:void(0);">分享到：</a></li>
            <li><a class="ds-weibo" href="javascript:void(0);" data-service="weibo">微博</a></li>
            <li><a class="ds-qzone" href="javascript:void(0);" data-service="qzone">QQ空间</a></li>
            <li><a class="ds-qqt" href="javascript:void(0);" data-service="qqt">腾讯微博</a></li>
            <li><a class="ds-wechat" href="javascript:void(0);" data-service="wechat">微信</a></li>
      	    <li><a class="ds-baidu" href="javascript:void(0);" data-service="baidu">百度</a></li>
          </ul>
          <div class="ds-share-icons-more">
          </div>
        </div>
    </div>
    <%} %>

       <%=AdminLinks %>
</article>
