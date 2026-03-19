import React from 'react';

const ROW_1 = [
  { icon: 'fab fa-python',      label: 'Python'              },
  { icon: 'fas fa-brain',       label: 'LangChain'           },
  { icon: 'fas fa-robot',       label: 'Claude API'          },
  { icon: 'fas fa-database',    label: 'RAG / Vector DB'     },
  { icon: 'fab fa-react',       label: 'React'               },
  { icon: 'fas fa-code',        label: 'TypeScript'          },
  { icon: 'fab fa-node-js',     label: 'Node.js'             },
  { icon: 'fas fa-plug',        label: 'REST APIs'           },
  { icon: 'fas fa-microchip',   label: 'LLM Engineering'     },
  { icon: 'fas fa-terminal',    label: 'Prompt Engineering'  },
];

const ROW_2 = [
  { icon: 'fas fa-fire',           label: 'Apache Spark'        },
  { icon: 'fas fa-network-wired',  label: 'Distributed Systems' },
  { icon: 'fas fa-layer-group',    label: 'Embeddings'          },
  { icon: 'fab fa-docker',         label: 'Docker'              },
  { icon: 'fas fa-infinity',       label: 'CI / CD'             },
  { icon: 'fas fa-chart-bar',      label: 'NumPy / Pandas'      },
  { icon: 'fas fa-leaf',           label: 'MongoDB'             },
  { icon: 'fas fa-database',       label: 'PostgreSQL'          },
  { icon: 'fab fa-git-alt',        label: 'Git'                 },
  { icon: 'fas fa-cube',           label: 'Fine-tuning'         },
];

/* Duplicate each row so the loop is seamless */
const r1 = [...ROW_1, ...ROW_1];
const r2 = [...ROW_2, ...ROW_2];

const Testimonials = () => (
  <section id='testimonials'>
    <div className='marquee-section'>

      {/* Label */}
      <div className='marquee-label'>
        <span className='marquee-dot'></span>
        Tech Stack &amp; Tools
      </div>

      {/* Row 1 — scrolls left */}
      <div className='marquee-track-wrap'>
        <div className='marquee-fade-left'></div>
        <div className='marquee-fade-right'></div>
        <div className='marquee-track marquee-track--left'>
          {r1.map((item, i) => (
            <div key={i} className='marquee-item'>
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className='marquee-track-wrap'>
        <div className='marquee-fade-left'></div>
        <div className='marquee-fade-right'></div>
        <div className='marquee-track marquee-track--right'>
          {r2.map((item, i) => (
            <div key={i} className='marquee-item'>
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Testimonials;
