import { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { createTimeline, stagger } from 'animejs';

const certifications = [
  { title: 'PYTHON FOR DATA SCIENCE, AI & DEVELOPMENT', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/K53DH18T40JM' },
  { title: 'DEVOPS AND SOFTWARE ENGINEERING WORKFLOWS', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/specialization/GTPCU96ZS6BF' },
  { title: 'IBM AI ENGINEERING PROFESSIONAL CERTIFICATE', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/professional-cert/SENFDD9C1PZU' },
];

const Achievements = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = createTimeline({
              easing: 'easeOutQuad',
            });

            timeline
              .add(sectionRef.current.querySelectorAll('.achieve-title'), {
                opacity: [0, 1],
                translateY: ['20px', '0px'],
                duration: 600,
              })
              .add(sectionRef.current.querySelectorAll('.cert-item'), {
                opacity: [0, 1],
                translateX: ['20px', '0px'],
                delay: stagger(100),
                duration: 800,
              }, '-=400');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 achieve-title opacity-0">
          <h2 className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">Professional Development</h2>
          <h3 className="text-4xl font-display font-bold">Certifications</h3>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index} className="cert-item opacity-0">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Card className="hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-md">
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                          <p className="text-xs text-muted-foreground">{item.issuer}</p>
                        </div>
                        <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardContent>
                    </Card>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Achievements;
