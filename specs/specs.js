describe ('pigLatin', function() {
  it("Vowel Start: it is true if 'ay' is appended to the end", function(){
    expect(pigLatin("alphabet")).to.equal("alphabetay");
  });

  it('Consonant Start: it is true if initial consonant is moved to the end with ay', function() {
    expect(pigLatin("Pig")).to.equal("igpay");
  });

  it('Consonant Start: in the special case where a string starts with qu both letters are moved', function() {
    expect(pigLatin("Quilt")).to.equal("iltquay");
  });
});
