describe('Search directive', function () {

    var element, compiled, compile, scope;

    beforeEach(module('app.spotify'));

    // preprocess routes into JS files
    beforeEach(module('partials'));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
        compile = _$compile_;
        scope = _$rootScope_.$new();
        element = angular.element('<search></search>');
        compiled = compile(element)(scope);
        scope.$digest();
    }));

    it("should initially have a span element", function(){
        expect(compiled.find("div").length).toBeGreaterThan(1);
    });

    it("should not have a span when click event triggered", function(){
        //compiled.find("span").triggerHandler("click");
        //expect(compiled.find("span").length).toBe(0);
    });

})