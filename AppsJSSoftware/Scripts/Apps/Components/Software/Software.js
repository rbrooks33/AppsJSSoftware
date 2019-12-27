define([], function () {
    var Me = {
        Enabled: true,
        Color: 'blue',
        Name: 'Software',
        Initialize: function (callback) {

            Apps.LoadTemplate('Software', Apps.Settings.WebRoot + '/' + Apps.Settings.AppsRoot + '/Components/Software/Software.html', function () {

                Apps.LoadStyle(Apps.Settings.WebRoot + '/' + Apps.Settings.AppsRoot + '/Components/Software/Software.css');

                Apps.Components.Software.Event('view');

                //In case one needs to manually re-initialize and do something
                if (callback)
                    callback();
            });

        },
        Show: function()
        {
            Apps.UI.Software.Show();
        },
        Hide: function()
        {
            Apps.UI.Software.Hide();
        },
        Event: function (sender, args, callback)
        {
            switch (sender)
            {
                case 'view':

                    Me.Show();
                    break;
            }
        }

    };
    return Me;
})