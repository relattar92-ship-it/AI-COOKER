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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
// src/App.tsx
var react_1 = require("react");
var types_1 = require("./types");
var SilentHeader_1 = require("./components/layout/SilentHeader");
var IngredientRitualField_1 = require("./components/ritual/IngredientRitualField");
var GlassActionButton_1 = require("./components/action/GlassActionButton");
var CinematicResultReveal_1 = require("./components/feedback/CinematicResultReveal");
function App() {
    var _this = this;
    var _a;
    var _b = (0, react_1.useState)({
        ingredients: '',
        image: null,
        mealType: types_1.MealType.Lunch,
        cuisine: types_1.CuisineType.Egyptian,
        preference: types_1.PreferenceType.Healthy,
        recipes: [],
        loading: false,
        error: null,
        language: 'en',
    }), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        document.documentElement.dir =
            state.language === 'ar' ? 'rtl' : 'ltr';
    }, [state.language]);
    var handleGenerate = function () { return __awaiter(_this, void 0, void 0, function () {
        var recipe;
        return __generator(this, function (_a) {
            if (!state.ingredients || state.loading)
                return [2 /*return*/];
            setState(function (s) { return (__assign(__assign({}, s), { loading: true })); });
            recipe = {
                title: 'Luxury Signature Dish',
                description: '',
                ingredients: state.ingredients.split(','),
                instructions: [
                    'Prepare ingredients carefully.',
                    'Cook slowly to perfection.',
                ],
                cookingTips: [],
                prepTime: '20 minutes',
                difficulty: 'Medium',
                servings: 2,
                chefSecret: 'Luxury lives in restraint.',
                pairing: 'Sparkling water',
                imageUrl: 'https://picsum.photos/1200/800',
                nutrients: {
                    calories: '—',
                    protein: '—',
                    carbs: '—',
                    fats: '—',
                    fiber: '—',
                    sugar: '—',
                    sodium: '—',
                    micronutrients: [],
                },
            };
            setTimeout(function () {
                setState(function (s) { return (__assign(__assign({}, s), { loading: false, recipes: [recipe] })); });
            }, 1200);
            return [2 /*return*/];
        });
    }); };
    return (<div className="min-h-screen bg-black text-white">
      <SilentHeader_1.SilentHeader onOpenSettings={function () { }}/>

      <main className="max-w-6xl mx-auto px-6 pb-40">
        <IngredientRitualField_1.IngredientRitualField value={state.ingredients} onChange={function (v) {
            return setState(function (s) { return (__assign(__assign({}, s), { ingredients: v })); });
        }} placeholder="Enter your ingredients…"/>

        <div className="mt-24">
          <GlassActionButton_1.GlassActionButton label="Create the Menu" loading={state.loading} onPress={handleGenerate}/>
        </div>

        <CinematicResultReveal_1.CinematicResultReveal recipe={(_a = state.recipes[0]) !== null && _a !== void 0 ? _a : null} language={state.language}/>
      </main>
    </div>);
}
