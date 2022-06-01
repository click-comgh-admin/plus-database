<!DOCTYPE html>
<html>
<head>
    <title>Paginationjs example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="http://192.168.43.161/AMG/plus_db/client_dashboard/assets/css/none-table-pagination.css" rel="stylesheet">
    <style type="text/css">
        ul, li {
            list-style: none;
        }

        #wrapper {
            width: 900px;
            margin: 20px auto;
        }

        .data-container {
            margin-top: 20px;
        }

        .data-container ul {
            padding: 0;
            margin: 0;
        }

        .data-container li {
            margin-bottom: 5px;
            padding: 5px 10px;
            background: #eee;
            color: #666;
        }
    </style>
</head>
<body>

<div id="wrapper">
    <section>
        <div class="data-container"></div>
        <div id="pagination-demo1"></div>
        <div class="data-container"></div>
        <div id="pagination-demo2"></div>
    </section>
</div>

<script type="text/javascript" src="http://192.168.43.161/AMG/plus_db/client_dashboard/assets/js/jquery.min.js"></script>
<script type="text/javascript" src="http://192.168.43.161/AMG/plus_db/client_dashboard/assets/js/none-table-pagination.min.js"></script>
<script>
$(function() {
  (function(name) {
    var container = $('#pagination-' + name);
    var sources = function () {
      var result = [];

      for (var i = 1; i < 196; i++) {
        result.push(i);
      }

      return result;
    }();

    var options = {
      dataSource: sources,
      totalNumber: 120,
      pageSize: 20,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = '<ul>';

        $.each(response, function (index, item) {
          dataHtml += '<li>' + item + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
      //return false
    });
  })('demo1');

  (function(name) {
    var container = $('#pagination-' + name);
    container.pagination({
      dataSource: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
      locator: 'items',
      totalNumber: 120,
      pageSize: 20,
      ajax: {
        beforeSend: function() {
          container.prev().html('Loading data from flickr.com ...');
        }
      },
      callback: function(response, pagination) {
        window.console && console.log(22, response, pagination);
        var dataHtml = '<ul>';

        $.each(response, function (index, item) {
          dataHtml += '<li>' + item.title + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      }
    })
  })('demo2');
})
</script>
</body>
</html>