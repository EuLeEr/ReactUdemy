'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibiliyToggle = function (_React$Component) {
    _inherits(VisibiliyToggle, _React$Component);

    function VisibiliyToggle(props) {
        _classCallCheck(this, VisibiliyToggle);

        var _this = _possibleConstructorReturn(this, (VisibiliyToggle.__proto__ || Object.getPrototypeOf(VisibiliyToggle)).call(this, props));

        _this.toogleVisibility = _this.toogleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibiliyToggle, [{
        key: 'toogleVisibility',
        value: function toogleVisibility() {
            this.setState(function (preState) {
                return {
                    visibility: !preState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'title',
                    null,
                    'Indecision App'
                ),
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toogle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toogleVisibility },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey ! These are some details '
                    )
                )
            );
        }
    }]);

    return VisibiliyToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibiliyToggle, null), document.getElementById("app"));
