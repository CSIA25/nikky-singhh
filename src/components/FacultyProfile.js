import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './FacultyProfile.css';

const FacultyProfile = () => {
  const books = [
    { title: "Guru Nanak's Transcendent Aesthetics", cover: "https://i.postimg.cc/T3BP5cCt/image.png", link: "https://www.amazon.com/Nanaks-Transcendent-Aesthetics-Nikky-Guninder-Singh/dp/1009562533" },
    { title: "Poems from the Sikh Sacred Tradition", cover: "https://i.postimg.cc/sgYL5jJb/image.png", link: "https://www.amazon.in/Poems-Sikh-Sacred-Tradition-Nanak/dp/0674292693" },
    { title: "Janamsakhi: Paintings of Guru Nanak in Early Sikh Art", cover: "https://i.postimg.cc/jdQ97qcm/image.png", link: "https://www.amazon.com/Janamsakhi-Paintings-Guru-Nanak-Early/dp/9392130805" },
    { title: "Poems from the Guru Granth Sahib", cover: "https://i.postimg.cc/fbFgNVWt/image.png", link: "https://www.amazon.com/Granth-Classical-Library-English-Punjabi/dp/0674258517" },
    { title: "The First Sikh: The Life and Legacy of Guru Nanak", cover: "https://i.postimg.cc/ZnJPtmNv/image.png", link: "https://www.amazon.com/First-Sikh-Nikky-Guninder-Kaur-Singh/dp/0670088625" },
    { title: "Hymns of the Sikh Gurus", cover: "https://i.postimg.cc/3rC5gZJt/image.png", link: "https://www.amazon.com/Hymns-Sikh-Gurus-Nikky-Guninder-Singh/dp/0143449966" },
    { title: "Of Sacred and Secular Desire: An Anthology of Lyrical Writings from the Punjab", cover: "https://i.postimg.cc/76n7NRRH/image.png", link: "https://www.amazon.com/Sacred-Secular-Desire-Anthology-Writings/dp/1848858841" },
    { title: "Sikhism: An Introduction", cover: "https://i.postimg.cc/hvGJ1txs/image.png", link: "https://www.amazon.co.jp/-/en/Nikky-Guninder-Kaur-Singh/dp/1848853211" },
    { title: "Sikhism (World Religions S.)", cover: "https://i.postimg.cc/43Qjd58h/image.png", link: "https://www.amazon.in/Sikhism-World-Religions-Nikky-Guninder-Singh/dp/0816024464?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.Fm4KZP2qgj5x_ox8suhR_hVWFbFKy2B9u8i6geDyWFrMfvHVeSIqX_yKcaVSax9gCaa1vchWjKBySLjSO5deqmK7Fj-7a4mbWDSgwJ9oLfI.NAPGJM8zD07OWfiZF-khdjseA-4g4C8zPgkBku93lOw&dib_tag=AUTHOR" },
    { title: "The Birth of the Khalsa: A Feminist Re-Memory of Sikh Identity", cover: "https://i.postimg.cc/NFV087QG/image.png", link: "https://www.amazon.com/Birth-Khalsa-Feminist-Re-Memory-Religious/dp/0791465845" },
    { title: "Cosmic Symphony: The Early and Later Poems of Bhai Vir Singh", cover: "https://i.postimg.cc/Tw1GkL7K/image.png", link: "https://www.amazon.com/Cosmic-Symphony-Early-Later-Poems/dp/8126025417" },
    { title: "The Name of My Beloved: Verses of the Sikh Gurus", cover: "https://i.postimg.cc/7ZcYpNzg/image.png", link: "https://www.amazon.com/Name-My-Beloved-Verses-Literature/dp/0060670495" },
    { title: "The Feminine Principle in the Sikh Vision of the Transcendent", cover: "https://i.postimg.cc/SQD4BrFJ/image.png", link: "https://www.amazon.com/Feminine-Principle-Cambridge-Religious-Traditions/dp/0521050561" },
    { title: "The Guru Granth Sahib: Its Physics and Metaphysics", cover: "https://i.postimg.cc/GtTCHDTw/image.png", link: "https://www.amazon.com/Guru-Granth-Sahib-Physics-Metaphysics/dp/8173041202" },
    { title: "The Tale of the Phoenix (Translation)", cover: "https://i.postimg.cc/02fsr9bN/image.png", link: "https://www.amazon.in/Tale-Phoenix-Dalip-Kaur-Tiwana/dp/8171426549" },
  ];

  const publications = [
    {
      title: "Of Sacred and Secular Desire",
      description: "Of Sacred and Secular Desire makes a major contribution to interfaith dialogue and comparative literary studies. Covering the entire spectrum of writers, from the artistic patterns of the first Punjabi poet (Sheikh Farid, 1175–1265) to feminist author Amrita Pritam (1919–2005), the volume serves as an ideal introduction to the three faiths of Sikhism, Islam, and Hinduism. Whether focusing on Sikh gurus, Sufi saints, or Hindu holy men, it boldly illuminates the area’s unique character, linguistic rhythms, and celebrations, and will have strong appeal to undergraduate students of religion, literature, and South Asian studies, as well as general readers."
    },
    {
      title: "Cosmic Symphony",
      description: "Cosmic Symphony brings together Bhai Vir Singh's early and final lyrical pulsations in the English language. Trel Tupke (meaning \"Dew Drops\") launched his poetic career; Mere Sainyan Jio (meaning \"My Beloved\") was the culmination of his poetic development. The images and themes important to Bhai Vir Singh early on in life replay in amazing beauty in his final poetic discourse. Together, they provide valuable insights into the poet's vast psychological and mystical world. Not only do these collections help us understand the poet's mental kaleidoscope, but they also impact the reader's mind. The short poems draw attention to the nitty-gritty things of daily life, including the curdled bits, the dew-drops, the wild berries. Through the profound simplicity of his language and the intensity of his emotions, Bhai Vir Singh bestows a magical quality, transforming ordinary experience into something absolutely extraordinary. His poems have enormous aesthetic power, igniting intellectual vigor and moral responsibility. As we read, our eyes literally open to the material phenomena all around us, and utterly fascinated, we begin to desire the Infinity—\"flitting on forms, they famish for more\" (Trel Tupke, 2)."
    },
    {
      title: "The Birth of the Khalsa: A Feminist Re-Memory of Sikh Identity",
      description: "The Birth of the Khalsa: A Feminist Re-Memory of Sikh Identity. Sikhs trace the genesis of their religious rites, prayers, dress codes, and names to Guru Gobind Singh's creation of the Khalsa in 1699. The Birth of the Khalsa is the first work to explore this pivotal event in Sikh history from a feminist perspective, questioning the ways in which Sikh memories have constructed a hypermasculine Sikh identity. The book argues that Sikh memory needs to acknowledge the vital female dimension grounded in the universal human condition and present at the birth of the Khalsa. Inspired by her own father, the eminent Sikh scholar Harbans Singh, Nikky-Guninder Kaur Singh rediscovers the feminine side of the words and actions of the founders of Sikhism. She looks at the basic texts and tenets of Sikh religion and demonstrates the female aspect in the sacred text, daily prayers, dress code, and rituals of the Sikhs. Singh reminds us that Guru Gobind Singh's original vision was an egalitarian one and urges present-day Sikhs to live up to the liberating implications set in motion when he gave birth to the Khalsa."
    },
    {
      title: "The Feminine Principle in the Sikh Vision of the Transcendent",
      description: "The feminine principle in the Sikh vision of the Transcendent explores the presence of the feminine in the Sikh conception and perception of Transcendent Reality. Sikh scriptures, transitional writing of the Sikhs, and their modern secular literature constitute the sources for the investigation. Within these extensive parameters, Nikky-Guninder Kaur Singh closely analyzes feminine imagery, tone, and symbolism, and in so doing recovers a holistic pattern of imagining and experiencing the sacred which can serve as a mode of empowerment for women. The book is divided into eight chapters which approach the Sikh vision of the Transcendent from historical, scriptural, symbolic, mythological, romantic, existential, ethical, and mystical perspectives. Each of these discloses the centrality of the woman, and enables the author to reverse what she regards as the one-sided androcentric hermeneutics which has prevailed in Sikh scholarship. The author maintains that the Sikh Gurus and poets did not want the feminine principle to serve just as a figure of speech or literary device; it was rather intended to pervade the whole life of the Sikhs. Her work bolsters the claim that literary symbols should be translated into social and political realities, and gives expression, too, to a powerful new voice in religious studies, whose fresh treatment of a religious tradition that has been relatively neglected in scholarly literature will give new direction and authenticity to feminists worldwide."
    },
    {
      title: "The Name of My Beloved: Verses of the Sikh Gurus",
      description: "The Name of My Beloved: Verses of the Sikh Gurus translated by Nikky-Guninder Kaur Singh is the first contemporary English translation of hymns from the Guru Granth Sahib—the principal sacred text of the Sikh religion—and the Dasam Granth, the poetry of the tenth Sikh guru. (It is) a significant contribution to the understanding of the essentials of the Sikhs' sacred scriptures. -Khushwant Singh The vision of Guru Nanak, the fifteenth-century founder of the Sikh faith, celebrated the oneness of the Divine that both dwells within and transcends the endless diversity of life. Guru Nanak's vision inspired the rich and inclusive philosophy of Sikhism, which is reflected in this first modern English translation of poems from the central Sikh text, the Guru Granth Sahib, and from the highly esteemed Dasam Granth. The Guru Granth Sahib consists of poems and hymns by Guru Nanak, his successors, and Hindu and Islamic saints, and the Dasam Granth collects the poetry of the tenth Sikh Guru. Poetry from both texts is heard daily and at rites of passage and celebration in Sikh homes and gurudwaras, carrying forward Sikh belief in the oneness and equality of all humanity."
    },
    {
      title: "The Guru Granth Sahib: Its Physics and Metaphysics",
      description: "The Guru Granth Sahib: Its Physics and Metaphysics attempts to trace the unifying force behind the trinity of Sikh metaphysics, aesthetics and dynamics. The book brings to a focus all those energies—spiritual, artistic and material—which animate and sanctify the Sikh way of life. Naturally in such a quest the Guru Granth Sahib offers the complete answer. Various aspects of the Guru Granth Sahib—its pontifical status, its philosophy, and its aesthetics—have been dealt with exceptional discernment and originality. A rigorous intellectual discipline is applied to bring out Sikh perspective on God, man and human destiny and in the process some of the problems of Sikh theology have been resolved with remarkable assurance and finesse. This study is marked by deep personal faith as well as by penetrating insights of a vital and searching intellect. Through a slim volume, this monograph will nevertheless constitute a well-formulated, lucid and concise statement and will rank as a reliable guide to Sikh thought and poetics. In Guninder Kaur, Sikh faith has found a highly accomplished and articulate interpreter of the innermost vision of the Gurus and of the concept of life issuing from it."
    }
  ];

  return (
    <div className="faculty-profile-container">
      {}
      <div className="profile-header">
        <img
          src="https://i.postimg.cc/g2gvC1cn/image.png"
          alt="Nikky-Guninder Kaur Singh"
          className="profile-image"
        />
        <div className="profile-info">
          <h1 className="name">Nikky-Guninder Kaur Singh</h1>
          <p className="title">
            Crawford Family Professor of Religion; Chair of Religious Studies
          </p>
          <p className="department">Department: Religious Studies</p>
          <div className="contact-info">
            <p className="contact-item">
              <MdEmail className="contact-icon" />
              <span className="contact-label">Email: </span>
              <a href="mailto:nikky-guninder.singh@colby.edu" className="link">nikky-guninder.singh@colby.edu</a>
            </p>
            <p className="contact-item">
              <MdPhone className="contact-icon" />
              <span className="contact-label">Phone: </span>(207) 859-4644 / (207) 859-4425
            </p>
            <p className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span className="contact-label">Office: </span>Lovejoy 349
            </p>
            <p className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span className="contact-label">Address: </span>4644 Mayflower Hill, Waterville, Maine 04901-8853
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          <li className="education-item">Ph.D., Religion, Temple University, 1987</li>
          <li className="education-item">M.A., Religion, University of Pennsylvania, 1982</li>
          <li className="education-item">B.A., Religion (Honors) and Philosophy, Wellesley College, 1978</li>
        </ul>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Areas of Expertise</h2>
        <p className="section-content">
          Sikhism, Eastern sexuality, Indian women's issues, major religions of northern India, role of women in religious literature, literary analysis of scripture, religious themes in Western literature.
        </p>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Websites</h2>
        <p className="section-content">
          <a href="https://www.colby.edu/academics/departments-and-programs/religious-studies/" className="link">Colby College Religious Studies</a>
        </p>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Books</h2>
        <div className="books">
          {books.map((book, index) => (
            <div key={index} className="book-container">
              {book.link ? (
                <a href={book.link} className="link" target="_blank" rel="noopener noreferrer">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-image"
                  />
                  <p className="book-title">{book.title}</p>
                </a>
              ) : (
                <>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-image"
                  />
                  <p className="book-title">{book.title}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Publications</h2>
        {publications.map((publication, index) => (
          <div key={index} className="publication-item">
            <h3 className="publication-title">{publication.title}</h3>
            <p className="publication-description">{publication.description}</p>
          </div>
        ))}
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Personal Information</h2>
        <p className="section-content">
          Nikky-Guninder Kaur Singh was born in India and went to Stuart Hall, a girls' preparatory school in the USA. She received her B.A. in philosophy and religion from Wellesley College, her M.A. from the University of Pennsylvania, and her Ph.D. from Temple University. She is the chair of the department and Crawford Family Professor of Religion at Colby College. Her interests focus on poetics and feminist issues. Nikky Singh has published extensively in the field of Sikhism. Her book on Sikhism was translated into Japanese. She has lectured widely in North America, England, France, India, and Singapore, and her views have been aired on television and radio in America, Canada, Bangladesh, Australia, Ireland, and India.
        </p>
      </div>

      {}
      <div className="section">
        <h2 className="section-title">Current Courses</h2>
        <ul className="course-list">
          <li className="course-item">RE111: Religions of India (Section A)</li>
          <li className="course-item">RE319: Bollywood and Beyond: South Asian Religions through Film (Section A)</li>
          <li className="course-item">RE326: Sensuous Religion: Aesthetics of South Asian Religions (Section A)</li>
        </ul>
      </div>
    </div>
  );
};

export default FacultyProfile;
