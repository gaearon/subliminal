import * as vscode from 'vscode';
import { CanIUse } from './can-i-use';

interface Sample {
  type: string | undefined;
  name?: string;
  click(): void;
  callback: () => void;
}

type SampleType = {
  myType: string;
};

export function activate(context: vscode.ExtensionContext) {
  var disposable = vscode.commands.registerCommand('extension.canIUse', () => {
    let caniuse = new CanIUse();

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    var expandedSelection = undefined;
    expandedSelection = getSelection(editor);
    if (expandedSelection) {
      var word = editor.document.getText(expandedSelection);
      if (word) {
        caniuse.retrieveInformation(caniuse.getNormalizedRule(word).toLowerCase(), showOutput);
      }
    }
  });

  context.subscriptions.push(disposable);
}

(function(angular) {
  'use strict';

  angular.module('chrome').factory('historyService', historyService);

  function historyService($q, sharedService) {
    return {
      historyList: historyList,
      getVisits: getVisits,
      monitorHistory: monitorHistory
    };

    function historyList(param) {
      var chromeParam = {};
      chromeParam.text = param.searchText;
      chromeParam.startTime = param.startDate;
      chromeParam.maxResults = param.maxResults;
      var deferred = $q.defer();
      chrome.history.search(chromeParam, function(response) {
        var list = sharedService.populateList(response);
        deferred.resolve(list);
      });
      return deferred.promise;
    }

    function getVisits(url) {
      var deferred = $q.defer();
      chrome.history.getVisits({ url: url }, function(visits) {
        deferred.resolve(visits);
      });
      return deferred.promise;
    }

    function monitorHistory(addHistoryCB) {
      chrome.history.onVisited.addListener(function(historyItem) {
        addHistoryCB(historyItem);
      });
    }
  }
})(angular);

const options = {
  method: 'GET',
  uri: 'https://api.github.com/com/search/repositores',
  headers: {
    'User-Agent': 'gittr-cli'
  },
  qs: { q: `language:${argv.lang}`, sort: 'stars' }
};
