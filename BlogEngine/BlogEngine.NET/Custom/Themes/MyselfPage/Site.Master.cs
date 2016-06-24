using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BlogEngine.Core;

namespace BlogEngine.NET.Custom.Themes.MyselfPage
{
    public partial class Site : System.Web.UI.MasterPage
    {
        protected static string ShRoot = Utils.ApplicationRelativeWebRoot + "scripts/syntaxhighlighter/";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (System.Threading.Thread.CurrentThread.CurrentCulture.LCID == 1065)
                System.Threading.Thread.CurrentThread.CurrentCulture = new PersianCulture();

            if (Security.IsAuthenticated)
            {
                aLogin.InnerText = Resources.labels.logoff;
                aLogin.HRef = Utils.RelativeWebRoot + "Account/login.aspx?logoff";
            }
            else
            {
                aLogin.HRef = Utils.RelativeWebRoot + "Account/login.aspx";
                aLogin.InnerText = Resources.labels.login;
            }
        }
    }
}