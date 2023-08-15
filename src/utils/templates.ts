interface Template {
  title: string;
  body: string;
  tags: string[];
}

const defaultTemplates: Template[] = [
  // ... Other templates
  {
    title: 'Dublin Core Metadata',
    body: `
    &lt;metadata xmlns:ocl="http://purl.org/dc/elements/1.1/"&gt;<br>
        &lt;ocl:title&gt;<span class="shortcode">[ocl:title]</span>&lt;/ocl:title&gt;<br>
        &lt;ocl:creator&gt;<span class="shortcode">[ocl:creator]</span>&lt;/ocl:creator&gt;<br>
        &lt;ocl:subject&gt;<span class="shortcode">[ocl:subject]</span>&lt;/ocl:subject&gt;<br>
        &lt;ocl:description&gt;<span class="shortcode">[ocl:description]</span>&lt;/ocl:description&gt;<br>
        &lt;ocl:publisher&gt;<span class="shortcode">[ocl:publisher]</span>&lt;/ocl:publisher&gt;<br>
        &lt;ocl:contributor&gt;<span class="shortcode">[ocl:contributor]</span>&lt;/ocl:contributor&gt;<br>
        &lt;ocl:date&gt;<span class="shortcode">[ocl:date]</span>&lt;/ocl:date&gt;<br>
        &lt;ocl:type&gt;<span class="shortcode">[ocl:type]</span>&lt;/ocl:type&gt;<br>
        &lt;ocl:format&gt;<span class="shortcode">[ocl:format]</span>&lt;/ocl:format&gt;<br>
        &lt;ocl:identifier&gt;<span class="shortcode">[ocl:identifier]</span>&lt;/ocl:identifier&gt;<br>
        &lt;ocl:source&gt;<span class="shortcode">[ocl:source]</span>&lt;/ocl:source&gt;<br>
        &lt;ocl:language&gt;<span class="shortcode">[ocl:language]</span>&lt;/ocl:language&gt;<br>
        &lt;ocl:relation&gt;<span class="shortcode">[ocl:relation]</span>&lt;/ocl:relation&gt;<br>
        &lt;ocl:rights&gt;<span class="shortcode">[ocl:rights]</span>&lt;/ocl:rights&gt;<br>
        &lt;ocl:coverage&gt;<span class="shortcode">[ocl:coverage]</span>&lt;/ocl:coverage&gt;<br>
    &lt;/metadata&gt;<br>
    `,
    tags: ['dublin-core', 'metadata'],
  },
  {
    title: 'ID3 Music Metadata',
    body: `
    <div class="content" contenteditable="true">
        &lt;metadata&gt;<br>
            &lt;ocl:title&gt;<span class="shortcode">[song:title]</span>&lt;/title&gt;<br>
            &lt;ocl:artist&gt;<span class="shortcode">[song:artist]</span>&lt;/artist&gt;<br>
            &lt;ocl:album&gt;<span class="shortcode">[song:album]</span>&lt;/album&gt;<br>
            &lt;ocl:genre&gt;<span class="shortcode">[song:genre]</span>&lt;/genre&gt;<br>
            &lt;ocl:release_date&gt;<span class="shortcode">[song:release_date]</span>&lt;/release_date&gt;<br>
            &lt;ocl:duration&gt;<span class="shortcode">[song:duration]</span>&lt;/duration&gt;<br>
            &lt;ocl:explicit&gt;<span class="shortcode">[song:explicit]</span>&lt;/explicit&gt;<br>
            &lt;ocl:isrc&gt;<span class="shortcode">[song:isrc]</span>&lt;/isrc&gt;<br>
            &lt;ocl:upc&gt;<span class="shortcode">[song:upc]</span>&lt;/upc&gt;<br>
            &lt;ocl:label&gt;<span class="shortcode">[song:label]</span>&lt;/label&gt;<br>
            &lt;ocl:external_urls&gt;<span class="shortcode">[song:external_urls]</span>&lt;/external_urls&gt;<br>
        &lt;/metadata&gt;<br>
    </div>
    `,
    tags: ['ID3', 'music', 'metadata'],
  },
];

export const getTemplates = (): Template[] => {
  return defaultTemplates;
};
