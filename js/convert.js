function convert(str) {
    text = '\n' + str + '\n';
    text = text.replace(RegExp("\\n#{6}\\s+(.+)", "g"), "\n<h6>$1</h6>");
    text = text.replace(RegExp("\\n#{5}\\s+(.+)", "g"), "\n<h5>$1</h5>");
    text = text.replace(RegExp("\\n#{4}\\s+(.+)", "g"), "\n<h4>$1</h4>");
    text = text.replace(RegExp("\\n#{3}\\s+(.+)", "g"), "\n<h3>$1</h3>");
    text = text.replace(RegExp("\\n#{2}\\s+(.+)", "g"), "\n<h2>$1</h2>");
    text = text.replace(RegExp("\\n#{1}\\s+(.+)", "g"), "\n<h1>$1</h1>");
    text = text.replace(RegExp("\\*\\*\\*(.*?)\\*\\*\\*", "g"), "<b><em>$1</em></b>");
    text = text.replace(RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>");
    text = text.replace(RegExp("\\*(.*?)\\*", "g"), "<em>$1</em>");
    text = text.replace(RegExp("_(.*?)_", "g"), "<em>$1</em>");
    text = text.replace(RegExp("~~(.*?)~~", "g"), "<del>$1</del>");
    text = text.replace(RegExp("```(.*)\\s+((.|\\s)*?)```", "g"), "<blockquote>\n$2</blockquote>");
    text = text.replace(RegExp("\\[---\\](.*)\\s+(.+)?\\n(.+)?\\n((.|\\s)*?)\\[---\\]", "g"), "<div class=\"folder\" fold=\"$2\" unfold=\"$3\">\n$4</div>");
    text = text.replace(RegExp("\\[!(.+?)\\]\\((.+?)\\)", "g"), "<img src=\"$2\">$1</img>");
    text = text.replace(RegExp("\\[(.+?)\\]\\((.+?)\\)", "g"), "<a href=\"$2\">$1</a>");
    text = text.replace(RegExp("\\n(?!<blockquote>|</blockquote>|<div|</div>)(.+)\\n", "g"), "\n<p>$1</p>\n");
    text = text.replace(RegExp("<p>(.+?：)(.+?)</p>", "g"), "<p><b>$1</b>$2</p>");
    text = text.replace(/: /g, "：");
    text = text.replace(/\n+/g, "\n");
    return text;
}

function startConvert() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    output.value = convert(input.value);
}