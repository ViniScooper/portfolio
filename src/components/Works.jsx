import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const defaultWorks = [
    { id: 10, title: "CloudOps Hub (SRE & Observabilidade)", category: "CLOUD OPS / ORACLE ATP / DOCKER", image: "/Gemini_Generated_Image_m3mlltm3mlltm3ml.png", featured: true },
    { id: 11, title: "FinControl (Gestão Financeira Cloud)", category: "FINTECH / ORACLE ATP / DOCKER", image: "/monitor_relatorios.png", featured: true },
    { id: 12, title: "Boteco do Severino (PDV & Gestão)", category: "FULL STACK / MYSQL / DOCKER", image: "/pdv.png", featured: true },
    { id: 6, title: "ByteDataEngine Lakehouse", category: "DATA ENGINEERING / OCI", image: "/bytedata_dashboard.png", featured: true },
    { id: 7, title: "PDV Byte System", category: "FULL STACK / AZURE", image: "/Gemini_Generated_Image_uuie5duuie5duuie.png", featured: false },
    { id: 9, title: "Career Management Hub (Job Tracker)", category: "FRONTEND / REACT", image: "/job_tracker1.png", featured: false },
];

const SortableProjectCard = ({ work }) => {
    const { language } = useLanguage();
    const t = translations[language].works;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: work.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        position: 'relative',
        touchAction: 'none' // Prevent scrolling when dragging on mobile
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Link to={`/project/${work.id}`} className={`work-item ${isDragging ? 'dragging' : ''} ${work.featured ? 'work-featured' : ''}`} draggable={false}>
                <div className="work-image-wrapper">
                    {work.featured && <span className="featured-badge">{t.featured}</span>}
                    <img src={work.image} alt={work.title} className="work-image" draggable={false} />
                    <div className="work-overlay">
                        <span>{t.details}</span>
                    </div>
                </div>
                <div className="work-info">
                    <span className="work-category">{work.category}</span>
                    <h3 className="work-title">{work.title}</h3>
                </div>
            </Link>
        </div>
    );
};

const Works = () => {
    const { language } = useLanguage();
    const t = translations[language].works;

    const [projectList, setProjectList] = useState(() => {
        const savedOrder = localStorage.getItem('portfolio_works_order_v7');
        if (savedOrder) {
            try {
                const parsedIds = JSON.parse(savedOrder);
                const orderedWorks = [];
                parsedIds.forEach(id => {
                    const project = defaultWorks.find(w => w.id === id);
                    if (project) orderedWorks.push(project);
                });
                defaultWorks.forEach(w => {
                    if (!orderedWorks.find(ow => ow.id === w.id)) orderedWorks.push(w);
                });
                return orderedWorks;
            } catch (e) {
                return defaultWorks;
            }
        }
        return defaultWorks;
    });

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // Start drag only if moved 5px so clicks can still happen
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setProjectList((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const newOrder = arrayMove(items, oldIndex, newIndex);
                localStorage.setItem('portfolio_works_order_v7', JSON.stringify(newOrder.map(item => item.id)));
                return newOrder;
            });
        }
    };

    return (
        <section id="works" className="works">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>
                <DndContext 
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext 
                        items={projectList}
                        strategy={rectSortingStrategy}
                    >
                        <div className="works-grid">
                            {projectList.map((work) => (
                                <SortableProjectCard key={work.id} work={work} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
                <div className="drag-hint" style={{ marginTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    {t.dragHint}
                </div>
            </div>
        </section>
    );
};

export default Works;
