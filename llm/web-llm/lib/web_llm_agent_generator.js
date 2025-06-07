"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webLlmAgentGenerator = exports.pushModelList = void 0;
var llm_utils_1 = require("@graphai/llm_utils");
var webllm = __importStar(require("@mlc-ai/web-llm"));
var model_list = webllm.prebuiltAppConfig.model_list;
var pushModelList = function (__model_list) {
    __model_list.forEach(function (model) {
        model_list.push(model);
    });
};
exports.pushModelList = pushModelList;
var webLlmAgentGenerator = function (_a) {
    var modelId = _a.modelId, callback = _a.callback, useIndexedDBCache = _a.useIndexedDBCache;
    var engine = null;
    var loadEngine = function (callback2) { return __awaiter(void 0, void 0, void 0, function () {
        var reportCallback, updateEngineInitProgressCallback;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reportCallback = (_a = callback2 !== null && callback2 !== void 0 ? callback2 : callback) !== null && _a !== void 0 ? _a : (function (__report) {
                        console.log("not implement callback");
                    });
                    updateEngineInitProgressCallback = function (report) {
                        reportCallback(report);
                    };
                    if (!(engine === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, webllm.CreateMLCEngine(modelId, {
                            appConfig: {
                                model_list: model_list,
                                useIndexedDBCache: useIndexedDBCache,
                            },
                            initProgressCallback: updateEngineInitProgressCallback,
                        })];
                case 1:
                    engine = _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var _webLlmAgent = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var _c, verbose, temperature, system, prompt, messages, message, top_p, stream_options, logit_bias, frequency_penalty, stream, userPrompt, systemPrompt, messagesCopy, llmParams, result, completion, tokens, _d, completion_1, completion_1_1, chunk, token, e_1_1, text, assistantMessage;
        var _e, e_1, _f, _g;
        var filterParams = _b.filterParams, params = _b.params, namedInputs = _b.namedInputs, config = _b.config;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _c = __assign(__assign({}, params), namedInputs), verbose = _c.verbose, temperature = _c.temperature, system = _c.system, prompt = _c.prompt, messages = _c.messages, message = _c.message;
                    top_p = params.top_p, stream_options = params.stream_options, logit_bias = params.logit_bias, frequency_penalty = params.frequency_penalty;
                    stream = __assign(__assign({}, (config || {})), params).stream;
                    userPrompt = (0, llm_utils_1.getMergeValue)(namedInputs, params, "mergeablePrompts", prompt);
                    systemPrompt = (0, llm_utils_1.getMergeValue)(namedInputs, params, "mergeableSystem", system);
                    messagesCopy = (0, llm_utils_1.getMessages)(systemPrompt, messages);
                    if (message) {
                        messagesCopy.push(message);
                    }
                    else if (userPrompt) {
                        messagesCopy.push({
                            role: "user",
                            content: userPrompt,
                        });
                    }
                    if (!(engine === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadEngine()];
                case 1:
                    _h.sent();
                    _h.label = 2;
                case 2:
                    if (verbose) {
                        console.log(messagesCopy);
                    }
                    llmParams = {
                        stream: stream,
                        messages: messagesCopy,
                        temperature: temperature !== null && temperature !== void 0 ? temperature : 0.7,
                        top_p: top_p !== null && top_p !== void 0 ? top_p : 0.95,
                        stream_options: stream_options !== null && stream_options !== void 0 ? stream_options : { include_usage: true },
                        logit_bias: logit_bias !== null && logit_bias !== void 0 ? logit_bias : { "14444": -100 },
                        frequency_penalty: frequency_penalty !== null && frequency_penalty !== void 0 ? frequency_penalty : 0.5,
                    };
                    if (!!stream) return [3 /*break*/, 4];
                    return [4 /*yield*/, engine.chat.completions.create(llmParams)];
                case 3:
                    result = _h.sent();
                    return [2 /*return*/, result];
                case 4: return [4 /*yield*/, engine.chat.completions.create(__assign(__assign({}, llmParams), { stream: true }))];
                case 5:
                    completion = _h.sent();
                    tokens = [];
                    _h.label = 6;
                case 6:
                    _h.trys.push([6, 11, 12, 17]);
                    _d = true, completion_1 = __asyncValues(completion);
                    _h.label = 7;
                case 7: return [4 /*yield*/, completion_1.next()];
                case 8:
                    if (!(completion_1_1 = _h.sent(), _e = completion_1_1.done, !_e)) return [3 /*break*/, 10];
                    _g = completion_1_1.value;
                    _d = false;
                    chunk = _g;
                    if (chunk.choices && chunk.choices[0]) {
                        token = chunk.choices[0].delta.content;
                        tokens.push(token);
                        if (stream && filterParams && filterParams.streamTokenCallback && token) {
                            filterParams.streamTokenCallback(token);
                        }
                    }
                    _h.label = 9;
                case 9:
                    _d = true;
                    return [3 /*break*/, 7];
                case 10: return [3 /*break*/, 17];
                case 11:
                    e_1_1 = _h.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 17];
                case 12:
                    _h.trys.push([12, , 15, 16]);
                    if (!(!_d && !_e && (_f = completion_1.return))) return [3 /*break*/, 14];
                    return [4 /*yield*/, _f.call(completion_1)];
                case 13:
                    _h.sent();
                    _h.label = 14;
                case 14: return [3 /*break*/, 16];
                case 15:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 16: return [7 /*endfinally*/];
                case 17:
                    text = tokens.join("");
                    assistantMessage = {
                        role: "assistant",
                        content: text,
                    };
                    messagesCopy.push(assistantMessage);
                    return [2 /*return*/, {
                            message: assistantMessage,
                            messages: messagesCopy,
                            text: text,
                        }];
            }
        });
    }); };
    var webLlmAgent = {
        name: "webLlmAgent",
        agent: _webLlmAgent,
        mock: _webLlmAgent,
        inputs: {},
        output: {},
        params: {},
        outputFormat: {},
        samples: [],
        description: "WebLlm Agent",
        category: ["llm"],
        author: "Receptron team",
        repository: "https://github.com/receptron/graphai-agents",
        license: "MIT",
        stream: true,
        npms: ["webLlm"],
        environmentVariables: [],
    };
    return {
        webLlmAgent: webLlmAgent,
        loadEngine: loadEngine,
    };
};
exports.webLlmAgentGenerator = webLlmAgentGenerator;
