"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceContent({ service }) {
  const isCustomWorks = service.id === "custom-works";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>
          <div className="relative h-full w-full">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              layout="fill"
              objectFit="cover"
              priority
              quality={75}
            />
          </div>
        </div>
        <div className="container mx-auto px-2 xs:px-4 sm:px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              {isCustomWorks ? (
                <>
                  Your Vision, <span className="text-blue-300">Our Craftsmanship</span>
                </>
              ) : (
                service.title
              )}
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
            <Link href="/contact">
              <p className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl text-sm xs:text-base">
                Get a Free Quote
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-2 xs:px-4 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-6">
              About {service.title}
            </h2>
            <p className="text-base xs:text-lg text-gray-600 mb-8">
              {service.longDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg xs:text-xl font-bold text-blue-600 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <svg
                          className="h-3 w-3 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm xs:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg xs:text-xl font-bold text-blue-600 mb-4">
                  Benefits
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-sm xs:text-base"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {isCustomWorks && (
              <>
                {/* Project Showcase Section */}
                <div className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                      Our Custom Creations
                    </span>
                    <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 mt-2 mb-4">
                      Bespoke Bathroom Projects
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
                    {service.customProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            layout="fill"
                            objectFit="cover"
                            quality={75}
                            className="hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg xs:text-xl font-bold text-gray-900 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-sm xs:text-base text-gray-600 mb-4">
                            {project.description}
                          </p>
                          <Link href="/contact">
                            <p className="text-blue-600 hover:text-blue-800 font-medium text-sm xs:text-base">
                              Start Your Project <span aria-hidden="true">→</span>
                            </p>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                      Client Stories
                    </span>
                    <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 mt-2 mb-4">
                      What Our Clients Say
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {service.testimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                      >
                        <p className="text-sm xs:text-base text-gray-600 mb-4 italic">
                          "{testimonial.quote}"
                        </p>
                        <p className="text-sm xs:text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-xs xs:text-sm text-gray-500">
                          {testimonial.location} | {testimonial.project}
                        </p>
                        <div className="flex mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.975 9.397c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                            </svg>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Process Section */}
                <div className="mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                      Our Approach
                    </span>
                    <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 mt-2 mb-4">
                      Your Custom Design Process
                    </h3>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                  </motion.div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {service.processSteps.map((step) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: step.step * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                        <h4 className="text-lg xs:text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm xs:text-base text-gray-600">
                          {step.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="mt-8 text-center">
              <Link href="/contact">
                <p className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm xs:text-base">
                  Start Your {service.title} Project
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}