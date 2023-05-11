# QUIZZICAL

Quizzical is an interactive quiz website that provides users with a quiz round on random topics.
Each round consists of 10 questions, and provides instant feedback on whether the answers are correct. The score is tallied on the quiz page, allowing users to keep track of each round. 
Intention for high score page...revisit 

[Target audience?]

You can view the deployed site here:
(https://dmp-86.github.io/quizzical/)

![Mock-up of responsive design](documentation/air2.png)
![Mock-up of responsive design](documentation/air1.png)

## UX

### Colour Scheme

- `#000000` used for dark.
- `#ffffff` used for light.
- `#f2f2f2` used for grey.
- `#8f52d1` used for light purp. 
- `#6c4298` used for dark purp. 
- `#b1fdb1` used for light blue. 
- `#4c55cc99` used to highlight some text areas*.hover color needs added 


I used [coolors.co](https://coolors.co/6c4298-8f52d1-1ba7c0-ffffff-f2f2f2-000000) to generate my colour palette.

![screenshot](documentation/palette%20update.png)


### Typography


- [Fira Sans Extra Condensed](https://fonts.google.com/specimen/Fira+Sans+Extra+Condensed?query=fira) was used for the primary header.

- [Poppins](https://fonts.google.com/specimen/Poppins) was used for all other content text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer and icongraphy within headings. *need to add decent footer 

## Features


### Features
- **Features on all pages-**
- Add features appearing on all (linked title & favicon)
- **Home Page**

- Featured on all pages, the fully responsive navigation bar includes links to the Logo, Home page, Gallery and Contact page. It is identical on each page to allow for easy navigation and consistentency in design aesthetics.
This section will enable the user to easily navigate from page to page across all devices without having to revert back to the previous page via the browser ‘back’ button.
The navigation bar converts to a hamburger icon with a dropdown menu on screen-sizes of 750px and below. The menu is accessed by pressing the hamburger icon. This allows the content to fit in a structured manner on smaller devices. 

![screenshot](documentation/nav-main.png)
![screenshot](documentation/nav-hamburger.png)
![screenshot](documentation/nav-hamburger-mobile.png)

- **The Hero Image & Hero Cover**

- The hero section includes an image to display the main site content and some cover text to briefly describe the subject matter found on the site. The main hero image uses a high resolution image of a cannabis plant under full spectrum light. The colors of the image serve as a break to the standard green palette used across the site. This is intended to capture attention and provide visual indication of the subject matter. 
The section uses an animation zoom feature to highlight the image for users. Included on top of the image, is a cover box with the name of the site and a brief description of the intended audience. 

![screenshot](documentation/hero-img-cover.png)

- **Plant History Section**

    - This section introduces the user to a brief history of the cannabis plant. The intention is to provide some background information on historical medicinal use of cannabis in the UK, followed by prohibition and eventually legalization for medical patients. 
The section includes an image relating to the content, as a means to break the blocks of information into more digestable pieces.

![screenshot](documentation/plant-history.png)

- **Patient Journey section**

    - This section has been broken up into three sub-sections. All three sub-sections are styled with an image to make the text blocks more digestible. 
The 'where do I start?' section describes the legislative status of cannabis in the UK for those seeking a prescription. It describes the criteria used by consultants to establish eligibility for a prescription. This aims to provide the user with an accurate starting point on their journey to acquire medical cannabis. 
The 'how do I prepare?' section describes the access to medical records required for the assessment, and documentation required for the initial consultation. Also included is a blockquote in a contrasting color, detailing the important info needed about Summary Care Record.
The 'initial consultation' section details how the first assessment is structured. It advises users on the type of questions they will be asked at the assessment. The section also includes a blockquote in a contrasting color, for the main points covered in the first assessment.

![screenshot](documentation/pj-start.png)
![screenshot](documentation/pj-prepare.png)
![screenshot](documentation/pj-consult.png)

- **Treatable Conditions section**

    - This section is broken into two unordered lists to separate content, and improve responsive design on smaller screen sizes. It lists an overview of conditions that can be treated with cannabis, and respective symptoms. 
This provides users with a quick reference guide to conditions that are eligible for treatment with cannabis products in the UK.

![screenshot](documentation/conditions-v.png)
![screenshot](documentation/conditions.png)

- **FAQs**

    - This is part of the 'Treatable Conditions' section, and it lists some frequently asked questions that are relevant for new users of the plant. It aims to dispell myths around cannabis use, and provides the user with further background information on the patient journey. 

![screenshot](documentation/faqs.png)

- **Testimonials section**

    - This section is broken into 4 quotes. The intention is to provide the user with real-life patient reviews for a range of different conditions and symptoms.
    The section is responsive and the structure of the quotes will change based on the users screen-size. 

![screenshot](documentation/testimonials-fs.png)
![screenshot](documentation/testimonials-bl.png)

- **Footer**

    - The footer section includes links to the relevant social media sites for CannaMed. The links will open to a new tab to allow easy navigation for the user. This negates the use of the 'back' button in the browser to allow for a more seamless user experience. 
The footer is valuable to the user as it encourages them to keep connected via social media. It also encourages the user to become part of the social media communities. Included on the footer is the name of the site, a brief description of the purpose of the site and the developer information. 

![screenshot](documentation/footer.png)

- **Gallery section**

    - The gallery will provide the user with supporting images to see cannabis in a range of forms.
This section is valuable to the user as they will be able to easily identify the types of products available for patients, and modes of administration. It also includes cannabis bud images, to showcase the diversity in strains. 
The gallery is fully responsive, and will show various column counts based on screen-size.  

![screenshot](documentation/gallery1.png)
![screenshot](documentation/gallery2.png)
![screenshot](documentation/gallery3.png)
![screenshot](documentation/gallery4.png)

- **Contact Us section**

    - This page will allow the user to contact the group directly for various reasons. 
The user can specify if they are in receipt of a Medical Cannabis Prescription, if they believe they are eligible or if they would like to discuss something else. 
The user will be asked to submit their full name and email address. The form diverts the user to an alternative page once they submit the request. This negates the use of browsers 'back' button, as it automatically redirects after 10 seconds. 

![screenshot](documentation/contact.png)
![screenshot](documentation/divertpage.png)


### Future Features

With additional time to spend on this project, I believe the below features would improve the overall user experience. 

- Truncated text/read more
    - Reduce blocks of text to improve readability of the page and improve the structure. 
- Eligibility Checker 
    - Introduce a survey for users to allow them to check their own eligibility, based on official criteria. 
- Cost Simulator
    - Introduce a calculator into the site where users can simulate how much a monthly prescription will cost them, based on their individual needs. 

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.
- [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) used to help generate the Markdown files.


## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Version Control

For the below commits, I have exceeded the 50 character recommendation in the description. I am aware of the issue with lengthy commit messages, and going forward I will keep them at 50 characters or less. 
I considered altering the commit messages before submission, however I did not want the last few weeks worth of commits to appear like they were done in one push this morning. 

- Commit 1
'Complete lighthouse audit on all pages, attach screenshots to documentation folder and reinstate divert refresh function'
b872ff53bd25cb7d4cf2e6e3da5a63b9c5b1a346

- Commit 2
'Fix bug in gallery page from validator to add div instead of section element.'
48a7c7bd1116c88b579f0c7b7b51a24d3800d514

- Commit 3
'Add lighthouse images to documentation folder, and add info on credits within readme'
592b07df43f046a5bfd2bec7bfef95d33cafb76f

- Commit 4
'Style anchor elements on divert page, and links on footer to avoid blue icons when the link is pressed'
036a96f061285ff51e35c3dba178f92c48fd7561

- Commit 5
'Update readme document with additional information to explain more features'
4c0c4dba8297c782b028dd7513eb0bc44e57ac3c

- Commit 6
'Expand info in readme.md file, and include screenshots of responsive design, navigation and hero image'
d4e350a71245890cd7c0ca7fdad48d259599c3c8

- Commit 7
'Restyle blockquotes, and add padding for paragraphs to improve aesthetics'
0ffc6353db5c13d853c9e9a18457ec12afe4b9b0

- Commit 8
'Style header and nav to be responsive in mobile view, and add a divert page to contact form'
402b3b64bac0db7cf3bdada28f8b6995dd2b50f3

- Commit 9
'Further testing of media queries for conditions, testimonials and journey section'
69fb9070e168fb274ddfc03d73659297c1c0fa33

- Commit 10
'Change styling issues, apply padding to footer anchor elements and patient journey section'
e3f7cff310da088a6a160e6b203e7c18ff448d87


## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/Dmp-86/CannaMed), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://dmp-86.github.io/CannaMed)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/Dmp-86/CannaMed) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/Dmp-86/CannaMed.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Dmp-86/CannaMed)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Dmp-86/CannaMed)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


## Credits

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| ['Required' radio buttons](https://www.w3docs.com/snippets/html.html) | How-to guide | Make a radio button selection required |
| [Wikipedia](https://en.wikipedia.org/wiki/Cannabis_in_the_United_Kingdom) | Main info | Cannabis History in the UK |
| [Lyphe Group](https://lyphe.com/) | Patient Journey/Treatable Conditions/FAQs | Info used on main page |
| [YouTube](https://www.youtube.com/watch?v=8QKOaTYvYUA) | Nav bar on all pages | Used across the site |


### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Unsplash](https://unsplash.com/) | entire site | image | images used across full site |
| [Creative Commons](https://wordpress.org/openverse/?referrer=creativecommons.org) | entire site | no physical | used for design inspo |


### Acknowledgements

- I would like to extend my sincerest gratitude to my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project. Their unwavering support and teaching style has helped me push through some very frustrating times. 
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.


