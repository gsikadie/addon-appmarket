/* -------------------------------------------------------------------------- */
/* Copyright 2002-2015, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

define(function(require) {
  var Locale = require('utils/locale');
//  var Buttons = require('./clusters-tab/buttons');
//  var Actions = require('./clusters-tab/actions');
//  var Table = require('./clusters-tab/datatable');

  var TAB_ID = require('./appmarket-apps-tab/tabId');
  var DATATABLE_ID = "dataTableAppMarket";

//  var _dialogs = [
//  ];
//
//  var _panels = [
//    require('./clusters-tab/panels/info'),
//    require('./clusters-tab/panels/hosts'),
//    require('./clusters-tab/panels/vnets'),
//    require('./clusters-tab/panels/datastores')
//  ];
//
//  var _formPanels = [
//    require('./clusters-tab/form-panels/create')
//  ];

  var Tab = {
    tabId: TAB_ID,
    title: Locale.tr("Appliances"),
    tabClass: "subTab",
    parentTab: "appmarket-dashboard-tab",
    listHeader: '<i class="fa fa-fw fa-truck"></i>&emsp;'+Locale.tr("Appliances"),
    infoHeader: '<i class="fa fa-fw fa-truck"></i>&emsp;'+Locale.tr("Appliance"),
    subheader: '<span/> <small></small>&emsp;',
    resource: 'Cluster',
    content: '<div class="row marketplace_error_message" hidden>\
        <div class="small-6 columns small-centered text-center">\
            <div class="alert-box alert radius">'+Locale.tr("Cannot connect to AppMarket")+'</div>\
        </div>\
    </div>',
    //buttons: Buttons,
    //actions: Actions,
    //dataTable: new Table(DATATABLE_ID, {actions: true, info: true}),
    //panels: _panels,
    //formPanels: _formPanels,
    //dialogs: _dialogs
  };

  return Tab;
});
