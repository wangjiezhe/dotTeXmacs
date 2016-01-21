<TeXmacs|1.99.2>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|ent|1.0>

    <\src-purpose>
      Plugin for the book ``Elementary Number Theory: Primes, Congruences,
      and Secrets'' by William Stein. With the aid of <TeXmacs>, this book
      should become interactive.
    </src-purpose>

    <src-copyright|2015-2020|Jiezhe Wang>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.GNU
      FDL
    </src-license>
  </src-title>>

  <active*|<\src-comment>
    Constant macro
  </src-comment>>

  <assign|sage|<active*|<with|font-shape|small-caps|Sage>>>

  <assign|emacs|<active*|<with|font-shape|small-caps|Emacs>>>

  <assign|tobefilled|<macro|<name|<active*|<with|color|red|[To Be Filled
  ...]>>>>>

  <assign|tbf|<macro|<name|<active*|<with|color|red|[To Be Filled ...]>>>>>

  <active*|<\src-comment>
    New theorem-like environment
  </src-comment>>

  <new-remark|sg|SAGE Example>

  <new-theorem|alg|Algorithm>

  <new-theorem|openproblem|Open Problem>

  <new-theorem|joke|Joke>

  <active*|<\src-comment>
    New list environment
  </src-comment>>

  <new-list|enumerate-exercise|<value|aligned-space-item>|<macro|name|<the-chapter>.<identity|<arg|name>>>>

  <assign|aligned-both-side-bracket-item|<macro|name|<aligned-item|<active*|<with|font-shape|left|(>><arg|name><active*|<with|font-shape|right|)>>>>>

  <new-list|enumerate-alpha-2|<value|aligned-both-side-bracket-item>|<macro|name|<number|<arg|name>|alpha>>>

  <active*|<\src-comment>
    Restart page number from 1 at table of contents
  </src-comment>>

  <assign|render-table-of-contents|<\macro|name|body>
    <assign|page-the-page|<macro|<number|<value|page-nr>|Roman>>><assign|page-nr|1><with|chapter-toc|<macro|name|>|section-toc|<macro|name|>|<principal-section*|<arg|name>>>

    <with|par-first|0fn|par-par-sep|0fn|<arg|body>>
  </macro>>

  <active*|<\src-comment>
    Index
  </src-comment>>

  <assign|indexnn|<macro|key|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><index-complex|<tuple|<arg|key>>|strong||<tuple|<arg|key>>>>>>

  <assign|subindexnn|<macro|key|secondary|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><index-complex|<tuple|<arg|key>|<arg|secondary>>|strong||<tuple|<arg|key>|<arg|secondary>>>>>>

  <assign|indexrange|<macro|key|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><index-complex|<tuple|<arg|key>>||<arg|key>|<tuple|<arg|key>>>>>>

  <assign|subindexrange|<macro|key|secondary|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><index-complex|<tuple|<arg|key>|<arg|secondary>>||<arg|key>
  <arg|secondary>|<tuple|<arg|key>|<arg|secondary>>>>>>

  \;

  <assign|defn|<macro|body|<style-with|src-compact|none|||<em|<arg|body>><flag|<localize|index>|dark
  green|body><index-complex|<tuple|<arg|body>>|strong||<tuple|<arg|body>>>>>>

  <assign|ithm|<macro|key|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><subindex|theorem|<arg|key>><index|<arg|key> theorem>>>>

  <assign|iprop|<macro|key|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><subindex|proposition|<arg|key>><index|<arg|key> proposition>>>>

  <assign|icol|<macro|key|<style-with|src-compact|none|<flag|<localize|index>|dark
  green|key><subindex|corollary|<arg|key>><index|<arg|key> corollary>>>>

  <assign|ialg|<macro|key|<style-with|src-compact|none|<dueto|<arg|key>><flag|<localize|index>|dark
  green|key><subindex|algorithm|<arg|key>>>>>

  <active*|<\src-comment>
    Text
  </src-comment>>

  <assign|zmod|<macro|p|<active*|<with|math-font|Bbb*|Z>>/<arg|p><active*|<with|math-font|Bbb*|Z>>>>

  <assign|ul|<macro|body|<underline|<arg|body>>>>

  <assign|center-box|<macro|body|<center|<frame|<style-with|src-compact|none|<arg|body><space|2em>>>>>>

  \;
</body>

<initial|<\collection>
</collection>>